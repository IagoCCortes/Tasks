import { IType } from '../interfaces/IType';
import mongoose from 'mongoose';

const Type = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

export default mongoose.model<IType & mongoose.Document>('Type', Type);
