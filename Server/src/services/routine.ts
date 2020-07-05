import { Service, Inject } from 'typedi';
import { IRoutine, IRoutineFilterDTO, IRoutineUpdateDTO, IRoutineCreateDTO } from '../interfaces/IRoutine';
import { Types } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import moment from 'moment';

@Service()
export default class RoutineService {
  constructor(@Inject('routineModel') private routineModel: Models.RoutineModel, @Inject('logger') private logger) {}

  public async GetById(routineId: string, user: IUser): Promise<IRoutine> {
    try {
      this.logger.silly('Retrieving routine record');
      const routineRecord = await this.routineModel
        .findOne({
          _id: new Types.ObjectId(routineId),
          owner: user._id,
        })
        .populate('types')
        .populate('frequency')
        .exec();

      if (!routineRecord) throw new Error('Routine not found');

      const routine = routineRecord.toObject();
      Reflect.deleteProperty(routine, 'owner');
      Reflect.deleteProperty(routine, 'createdAt');
      Reflect.deleteProperty(routine, 'updatedAt');
      Reflect.deleteProperty(routine, '__v');
      return routine;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetAllByUserFiltered(routineFilterDTO: IRoutineFilterDTO, user: IUser): Promise<IRoutine[]> {
    try {
      this.logger.silly('Filtering routines');
      const [field, value] = routineFilterDTO.sort.split(':');
      let routineRecordsQuery = this.routineModel.find({
        owner: user._id,
      });

      if (routineFilterDTO.frequency)
        routineRecordsQuery = routineRecordsQuery.find({
          frequency: routineFilterDTO.frequency,
        });

      if (routineFilterDTO.types && routineFilterDTO.types.length > 0)
        routineRecordsQuery = routineRecordsQuery.find({
          frequency: { $in: routineFilterDTO.types },
        });

      const routineRecords = routineRecordsQuery
        .skip(routineFilterDTO.limit * (routineFilterDTO.page - 1))
        .limit(routineFilterDTO.limit)
        .sort({ [field]: value === 'asc' ? 1 : -1 })
        .lean<IRoutine>()
        .exec();

      return routineRecords;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async RegisterRoutine(routineCreateDTO: IRoutineCreateDTO, user: IUser): Promise<IRoutine> {
    try {
      this.logger.silly('Creating routine db record');
      const routineRecord = await this.routineModel.create({
        ...routineCreateDTO,
        owner: user._id,
      });

      if (!routineRecord) throw new Error('Routine cannot be created');

      const routine = routineRecord.toObject();
      return routine;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async PatchById(routineUpdateDTO: IRoutineUpdateDTO, routineId: string, user: IUser): Promise<void> {
    try {
      this.logger.silly('Patching routine record');
      const routineRecord = await this.routineModel
        .findOne({
          _id: new Types.ObjectId(routineId),
          owner: user._id,
        })
        .exec();

      if (!routineRecord) throw new Error('Routine not found');

      const updates = Object.keys(routineUpdateDTO);
      updates.forEach((update) => (routineRecord[update] = routineUpdateDTO[update]));

      await routineRecord.save();
      return;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async DeleteById(routineId: string, user: IUser): Promise<void> {
    try {
      this.logger.silly('Deleting routine record');
      const routineRecord = await this.routineModel
        .remove({
          _id: new Types.ObjectId(routineId),
          owner: user._id,
        })
        .exec();

      if (!routineRecord) throw new Error('Routine not found');

      return;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
