import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate } from 'celebrate';
import winston from 'winston';
import schema from './schema';
import middlewares from '../../middlewares';
import { IFrequencyCreateDto } from '../../../interfaces/IFrequency';
import FrequencyService from '../../../services/frequency';

const route = Router();

export default (app: Router) => {
  app.use('/frequency', route);

  route.get('/', middlewares.isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get('logger') as winston.Logger;
    logger.debug(`Calling get all frequencies endpoint`);
    try {
      const frequencyServiceInstance = Container.get(FrequencyService);
      const tasks = await frequencyServiceInstance.GetAll();
      return res.status(200).json(tasks);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });

  route.post(
    '/',
    middlewares.isAuth,
    celebrate({ body: schema.frequencyCreate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling register frequency endpoint with body: ${req.body}`);
      try {
        const frequencyServiceInstance = Container.get(FrequencyService);
        const tasks = await frequencyServiceInstance.Register(req.body as IFrequencyCreateDto);
        return res.status(200).json(tasks);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
