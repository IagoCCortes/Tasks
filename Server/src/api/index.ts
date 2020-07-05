import { Router } from 'express';
import auth from './routes/auth/auth';
import user from './routes/user/user';
import agendash from './routes/agendash/agendash';
import task from './routes/task/task';
import routine from './routes/routine/routine';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  auth(app);
  user(app);
  task(app);
  routine(app);
  agendash(app);

  return app;
};
