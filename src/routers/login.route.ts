import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validFields from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post(
  '/login', 
  validFields,
  loginController.login,
);

export default loginRouter;