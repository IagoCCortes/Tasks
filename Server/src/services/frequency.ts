import { Service, Inject } from 'typedi';
import { IFrequencyCreateDto, IFrequency } from '../interfaces/IFrequency';

@Service()
export default class FrequencyService {
  constructor(
    @Inject('frequencyModel') private frequencyModel: Models.FrequencyModel,
    @Inject('logger') private logger,
  ) {}

  public async Register(frequencyCreateDTO: IFrequencyCreateDto): Promise<IFrequency> {
    try {
      this.logger.silly('Creating frequency db record');
      const taskRecord = await this.frequencyModel.create({
        ...frequencyCreateDTO,
      });

      if (!taskRecord) throw new Error('Frequency cannot be created');

      const task = taskRecord.toObject();
      return task;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async GetAll(): Promise<IFrequency[]> {
    try {
      this.logger.silly('Getting all frequencies');
      return this.frequencyModel.find();
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
