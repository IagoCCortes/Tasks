import { Types } from 'mongoose';

export interface IType {
  _id: Types.ObjectId;
  name: string;
}

export interface ITypeCreateDto {
  name: string;
}
