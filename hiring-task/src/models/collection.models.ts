import mongoose, { Document, Schema } from 'mongoose';

export interface ICollection extends Document {
    name: string;
    description?: string;
    user: mongoose.Types.ObjectId; 
    books: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
  }

  const CollectionSchema = new Schema<ICollection>(
      {
          name: {
              type: String,
              required: true,
              trim: true
        },
          description: {
            type: String,
            required: true,
            trim: true
          },
          user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
          },
          books: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Book'
            }
          ]
    },
      {
        timestamps: true
      }
  )

  export default mongoose.model<ICollection>('Collection', CollectionSchema)