import { IRoutine } from '../interfaces/IRoutine';
import mongoose, { Types } from 'mongoose';
import Task from './task';

const Routine = new mongoose.Schema(
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
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    expectedValue: {
      type: String,
      required: false,
    },
    achievedValue: {
      type: String,
      required: false,
    },
    frequency: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Frequency',
    },
    types: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Type',
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true },
);

Routine.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});

Routine.pre('remove', function (next) {
  Task.remove({ routine: this._id }).exec();
  next();
});

export default mongoose.model<IRoutine & mongoose.Document>('Routine', Routine);
