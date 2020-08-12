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
  tasks: any;
}

export interface ICreateTask {
  name: string;
  description: string;
  expectedValue?: number;
  expectedTime?: number;
  dueDate?: Date;
  frequency?: string;
  types: string[];
}

export interface ITaskFilter {
  completed: boolean;
  types: string[];
  limit: number;
  page: number;
  sort: string;
}

export type CreateTaskUnionType = "name" | "description" | "expectedValue" | "expectedTime" | "dueDate" | "frequency" | "types";
