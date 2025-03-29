import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
    name: string;
    author: string;
    genre: string;
    pages: number;
    user: mongoose.Types.ObjectId;
    collections: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const BookSchema = new Schema<IBook>(
    {

        name: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        genre: {
            type: String,
            required: true,
            trim: true,
        },
        pages: {
            type: Number,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        collections: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Collection'
            }
        ]
    },
    {
        timestamps: true
    }
)

export default mongoose.model<IBook>('Book', BookSchema);