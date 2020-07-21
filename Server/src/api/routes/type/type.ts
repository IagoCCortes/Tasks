import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate } from 'celebrate';
import winston from 'winston';
import schema from './schema';
import middlewares from '../../middlewares';
import { ITypeCreateDto } from '../../../interfaces/IType';
import TypeService from '../../../services/type';

const route = Router();

export default (app: Router) => {
  app.use('/type', route);

  route.get('/', middlewares.isAuth, async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get('logger') as winston.Logger;
    logger.debug(`Calling get all types endpoint`);
    try {
      const typeServiceInstance = Container.get(TypeService);
      const tasks = await typeServiceInstance.GetAll();
      return res.status(200).json(tasks);
    } catch (e) {
      logger.error('🔥 error: %o', e);
      return next(e);
    }
  });

  route.post(
    '/',
    middlewares.isAuth,
    celebrate({ body: schema.typeCreate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling register type endpoint with body: ${req.body}`);
      try {
        const typeServiceInstance = Container.get(TypeService);
        const tasks = await typeServiceInstance.Register(req.body as ITypeCreateDto);
        return res.status(200).json(tasks);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
