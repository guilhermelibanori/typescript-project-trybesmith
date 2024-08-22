import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const validFields = (req: Request, res: Response, next: NextFunction): unknown => {
  const { username, password } = req.body; 
  if (!username || !password) {
    return res.status(mapStatusHTTP('INVALID_DATA')).json({
      message: '"username" and "password" are required' });
  }
  next();
};

export default validFields;