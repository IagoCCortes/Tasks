import { Types } from 'mongoose';

export interface ITask {
  _id: string;
  name: string;
  description: string;
  expectedValue: string;
  achievedValue: string;
  dueDate: Date;
  completedDate: Date;
  owner: Types.ObjectId;
  routine: Types.ObjectId;
  types: [Types.ObjectId];
}

export interface ITaskCreateDTO {
  name: string;
  description: string;
  expectedValue: string;
  dueDate: Date;
  routine: Types.ObjectId;
  types: [Types.ObjectId];
}

export interface ITaskUpdateDTO {
  description: string;
  dueDate: Date;
  expectedValue: string;
  achievedValue: string;
  completedDate: Date;
  types: [Types.ObjectId];
}

export interface ITaskFilterDTO {
  completed: boolean;
  routine: Types.ObjectId;
  types: [Types.ObjectId];
  limit: number;
  page: number;
  sort: string;
}
