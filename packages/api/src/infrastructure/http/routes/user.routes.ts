import { Router } from 'express';
const { celebrate, Joi, Segments } = require('celebrate');

import ensureAuthentication from '../middlewares/EnsureAuthentication';
import { createUserController } from '../../../useCases/createUser';

const usersRouter = Router();

usersRouter.post(
  '/users',
  celebrate(
    {
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      },
    },
    { abortEarly: false }
  ),
  createUserController.handle
);

usersRouter.get('/users', createUserController.handle);

export default usersRouter;
