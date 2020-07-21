import { Types } from 'mongoose';

export interface ITask {
  _id: string;
  name: string;
  description: string;
  expectedValue: number;
  achievedValue: number;
  expectedTime: number;
  achievedTime: number;
  dueDate: Date;
  completedDate: Date;
  successRate: number;
  timesHappened: number;
  owner: Types.ObjectId;
  frequency: Types.ObjectId;
  types: [Types.ObjectId];
}

export interface ITaskCreateDTO {
  name: string;
  description: string;
  expectedValue?: number;
  expectedTime?: number;
  dueDate?: Date;
  frequency?: Types.ObjectId;
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
