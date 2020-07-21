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
      type: Number,
      required: false,
    },
    expectedTime: {
      type: Number,
      required: false,
    },
    achievedValue: {
      type: Number,
      required: false,
    },
    achievedTime: {
      type: Number,
      required: false,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    completedDate: {
      type: Date,
      required: false,
    },
    successRate: {
      type: Number,
      required: false,
    },
    timesHappened: {
      type: Number,
      required: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    frequency: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Frequency',
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
