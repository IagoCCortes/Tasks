import { Types } from 'mongoose';

export interface IFrequency {
  _id: Types.ObjectId;
  name: string;
}

export interface IFrequencyCreateDto {
  name: string;
}
