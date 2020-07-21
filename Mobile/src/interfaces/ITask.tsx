import {Modify, IContextValues} from './common/commonInterfaces';

export type ITask = Modify<
  IContextValues,
  {
    state: ITaskState;
  }
> & {
  create: Function;
};

export interface ITaskState {
  errorMessage: string;
}

export interface ICreateTask {
  name: string;
  description: string;
  expectedValue?: number;
  expectedTime?: number;
  dueDate?: Date;
  frequency?: string;
  types: [string];
}

export type CreateTaskUnionType = "name" | "description" | "expectedValue" | "expectedTime" | "dueDate" | "frequency" | "types";
