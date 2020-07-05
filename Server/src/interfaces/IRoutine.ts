import { Types } from 'mongoose';

export interface IRoutine {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  expectedValue: string;
  achievedValue: string;
  frequency: Types.ObjectId;
  types: [Types.ObjectId];
  owner: Types.ObjectId;
}

export interface IRoutineCreateDTO {
  name: string;
  description: string;
  expectedValue: string;
  frequency: Types.ObjectId;
  types: [Types.ObjectId];
}

export interface IRoutineUpdateDTO {
  name: string;
  description: string;
  active: boolean;
  expectedValue: string;
  achievedValue: string;
  frequency: Types.ObjectId;
  types: [Types.ObjectId];
}

export interface IRoutineFilterDTO {
  frequency: Types.ObjectId;
  types: [Types.ObjectId];
  limit: number;
  page: number;
  sort: string;
}
