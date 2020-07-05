import { ITask } from '../interfaces/ITask';
import mongoose, { Types } from 'mongoose';

const Task = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    expectedValue: {
      type: String,
      required: false,
    },
    achievedValue: {
      type: String,
      required: false,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    completedDate: {
      type: Date,
      required: false,
      default: null,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    routine: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Routine',
    },
    types: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Type',
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<ITask & mongoose.Document>('Task', Task);
