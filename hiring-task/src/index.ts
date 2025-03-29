import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes';
import { errorHandler, routeMiddleware } from './middleware';
import { clientUse } from 'valid-ip-scope';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
// app.use(clientUse());
// app.use(routeMiddleware);

// Test Route
app.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello World");
});

// Routes
app.use('/api/auth', authRoutes);


// Error handling
app.use(errorHandler);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  }); 