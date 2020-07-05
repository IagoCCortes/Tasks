import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate } from 'celebrate';
import winston from 'winston';
import schema from './schema';
import middlewares from '../../middlewares';
import RoutineService from '../../../services/routine';
import { IRoutineFilterDTO, IRoutineUpdateDTO, IRoutineCreateDTO } from '../../../interfaces/IRoutine';

const route = Router();

export default (app: Router) => {
  app.use('/routine', route);

  route.post(
    '/filter',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.routineList }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling filtered routines endpoint with body: ${req.body}`);
      try {
        const routineServiceInstance = Container.get(RoutineService);
        const routines = await routineServiceInstance.GetAllByUserFiltered(
          req.body as IRoutineFilterDTO,
          req.currentUser,
        );
        return res.status(200).json(routines);
      } catch (e) {
        logger.error(`🔥 error: ${e}`);
        return next(e);
      }
    },
  );

  route.get(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ params: schema.routineId }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling get routine by Id endpoint with id: ${req.params.id}`);
      try {
        const routineServiceInstance = Container.get(RoutineService);
        const routine = await routineServiceInstance.GetById(req.params.id as string, req.currentUser);
        return res.status(200).json(routine);
      } catch (e) {
        logger.error(`🔥 error: ${e}`);
        return next(e);
      }
    },
  );

  route.post(
    '/',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.routineCreate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling create on routine endpoint with body: ${req.body}`);
      try {
        const routineServiceInstance = Container.get(RoutineService);
        const routine = await routineServiceInstance.RegisterRoutine(req.body as IRoutineCreateDTO, req.currentUser);
        return res.status(201).json(routine);
      } catch (e) {
        logger.error(`🔥 error: ${e}`);
        return next(e);
      }
    },
  );

  route.patch(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.routineUpdate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling update on routine endpoint with id: ${req.params.id} and body: ${req.body}`);
      try {
        const routineServiceInstance = Container.get(RoutineService);
        await routineServiceInstance.PatchById(req.body as IRoutineUpdateDTO, req.params.id as string, req.currentUser);
        return res.status(204).json();
      } catch (e) {
        logger.error(`🔥 error: ${e}`);
        return next(e);
      }
    },
  );

  route.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ params: schema.routineId }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling delete on routine endpoint with id: ${req.params.id}`);
      try {
        const routineServiceInstance = Container.get(RoutineService);
        const routine = await routineServiceInstance.DeleteById(req.params.id as string, req.currentUser);
        return res.status(204).json(routine);
      } catch (e) {
        logger.error(`🔥 error: ${e}`);
        return next(e);
      }
    },
  );
};
