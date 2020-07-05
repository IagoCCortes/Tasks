import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate } from 'celebrate';
import winston from 'winston';
import schema from './schema';
import middlewares from '../../middlewares';
import TaskService from '../../../services/task';
import { ITaskFilterDTO, ITaskUpdateDTO, ITaskCreateDTO } from '../../../interfaces/ITask';

const route = Router();

export default (app: Router) => {
  app.use('/task', route);

  route.post(
    '/filter',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.taskList }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling filtered tasks endpoint with body: ${req.body}`);
      try {
        const taskServiceInstance = Container.get(TaskService);
        const tasks = await taskServiceInstance.GetAllByUserFiltered(req.body as ITaskFilterDTO, req.currentUser);
        return res.status(200).json(tasks);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.get(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ params: schema.taskId }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling get task by Id endpoint with id: ${req.params.id}`);
      try {
        const taskServiceInstance = Container.get(TaskService);
        const task = await taskServiceInstance.GetById(req.params.id as string, req.currentUser);
        return res.status(200).json(task);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.post(
    '/',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.taskCreate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling create on task endpoint with body: ${req.body}`);
      try {
        const taskServiceInstance = Container.get(TaskService);
        const task = await taskServiceInstance.RegisterTask(req.body as ITaskCreateDTO, req.currentUser);
        return res.status(201).json(task);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.patch(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ body: schema.taskUpdate }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug(`Calling update on task endpoint with id: ${req.params.id} and body: ${req.body}`);
      try {
        const taskServiceInstance = Container.get(TaskService);
        await taskServiceInstance.PatchById(req.body as ITaskUpdateDTO, req.params.id as string, req.currentUser);
        return res.status(204).json();
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    celebrate({ params: schema.taskId }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger = Container.get('logger') as winston.Logger;
      logger.debug('Calling delete on task endpoint with id: %o', req.params.id);
      try {
        const taskServiceInstance = Container.get(TaskService);
        const task = await taskServiceInstance.DeleteById(req.params.id as string, req.currentUser);
        return res.status(204).json(task);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};
