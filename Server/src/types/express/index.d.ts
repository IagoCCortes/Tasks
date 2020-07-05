import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import { ITask } from '../../interfaces/ITask';
import { IRoutine } from '../../interfaces/IRoutine';
import { IFrequency } from '../../interfaces/IFrequency';
import { IType } from '../../interfaces/IType';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type TaskModel = Model<ITask & Document>;
    export type RoutineModel = Model<IRoutine & Document>;
    export type FrequencyModel = Model<IFrequency & Document>;
    export type TypeModel = Model<IType & Document>;
  }
}
