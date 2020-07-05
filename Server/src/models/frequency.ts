import { IFrequency } from '../interfaces/IFrequency';
import mongoose from 'mongoose';

const Frequency = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  { collection: 'frequencies' },
);

export default mongoose.model<IFrequency & mongoose.Document>('Frequency', Frequency);
