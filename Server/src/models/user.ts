import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    birthday: {
      type: Date,
      default: new Date(),
    },
    profilePicUrl: {
      type: String,
      trim: true,
    },
    password: String,
    salt: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true },
);

User.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});

export default mongoose.model<IUser & mongoose.Document>('User', User);
