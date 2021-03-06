import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.send('Hello World'));

routes.use(authMiddleware);

export default routes;
