import { Service, Inject } from 'typedi';
import { ITask, ITaskFilterDTO, ITaskUpdateDTO, ITaskCreateDTO } from '../interfaces/ITask';
import { Types } from 'mongoose';
import { IUser } from '../interfaces/IUser';

@Service()
export default class TaskService {
  constructor(@Inject('taskModel') private taskModel: Models.TaskModel, @Inject('logger') private logger) {}

  public async GetById(taskId: string, user: IUser): Promise<ITask> {
    try {
      this.logger.silly('Retrieving task record');
      const taskRecord = await this.taskModel
        .findOne({
          _id: new Types.ObjectId(taskId),
          owner: user._id,
        })
        .populate('types')
        .select('-__v')
        .exec();

      if (!taskRecord) throw new Error('Task not found');

      const task = taskRecord.toObject();
      Reflect.deleteProperty(task, 'owner');
      Reflect.deleteProperty(task, 'createdAt');
      Reflect.deleteProperty(task, 'updatedAt');
      return task;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetAllByUserFiltered(taskFilterDTO: ITaskFilterDTO, user: IUser): Promise<ITask[]> {
    try {
      this.logger.silly('Filtering tasks');
      const [field, value] = taskFilterDTO.sort.split(':');
      let taskRecordsQuery = this.taskModel.find({
        owner: user._id,
      });

      if (taskFilterDTO.completed)
        taskRecordsQuery = taskRecordsQuery.find({
          completedDate: taskFilterDTO.completed === true ? { $ne: null } : null,
        });

      if (taskFilterDTO.routine)
        taskRecordsQuery = taskRecordsQuery.find({
          routine: taskFilterDTO.routine,
        });

      if (taskFilterDTO.types && taskFilterDTO.types.length > 0)
        taskRecordsQuery = taskRecordsQuery.find({
          'types._id': { $in: taskFilterDTO.types },
        });

      const taskRecords = taskRecordsQuery
        .skip(taskFilterDTO.limit * (taskFilterDTO.page - 1))
        .limit(taskFilterDTO.limit)
        .sort({ [field]: value === 'asc' ? 1 : -1 })
        .populate('types')
        .lean<ITask>()
        .exec();

      return taskRecords;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async RegisterTask(taskCreateDTO: ITaskCreateDTO, user: IUser): Promise<ITask> {
    try {
      this.logger.silly('Creating task db record');
      const taskRecord = await this.taskModel.create({
        ...taskCreateDTO,
        owner: user._id,
      });

      if (!taskRecord) throw new Error('Task cannot be created');

      const task = taskRecord.toObject();
      return task;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async PatchById(taskUpdateDTO: ITaskUpdateDTO, taskId: string, user: IUser): Promise<void> {
    try {
      this.logger.silly('Patching task record');
      const taskRecord = await this.taskModel
        .findOne({
          _id: new Types.ObjectId(taskId),
          owner: user._id,
        })
        .exec();

      if (!taskRecord) throw new Error('Task not found');

      const updates = Object.keys(taskUpdateDTO);
      updates.forEach((update) => (taskRecord[update] = taskUpdateDTO[update]));

      await taskRecord.save();
      return;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async DeleteById(taskId: string, user: IUser): Promise<void> {
    try {
      this.logger.silly('Deleting task record');
      const taskRecord = await this.taskModel
        .findOneAndDelete({
          _id: new Types.ObjectId(taskId),
          owner: user._id,
        })
        .exec();

      if (!taskRecord) throw new Error('Task not found');

      return;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
