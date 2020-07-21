import { Service, Inject } from 'typedi';
import { ITypeCreateDto, IType } from '../interfaces/IType';

@Service()
export default class TypeService {
  constructor(@Inject('typeModel') private typeModel: Models.TypeModel, @Inject('logger') private logger) {}

  public async Register(typeCreateDTO: ITypeCreateDto): Promise<IType> {
    try {
      this.logger.silly('Creating type db record');
      const taskRecord = await this.typeModel.create({
        ...typeCreateDTO,
      });

      if (!taskRecord) throw new Error('Type cannot be created');

      const task = taskRecord.toObject();
      return task;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetAll(): Promise<IType[]> {
    try {
      this.logger.silly('Getting all types');
      return this.typeModel.find();
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
