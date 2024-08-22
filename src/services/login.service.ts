import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

async function doLogin(user: string, password: string): 
Promise<ServiceResponse<{ token: string }>> {
  const findLogin = await UserModel.findOne({ where: { username: user } });

  if (!findLogin || !bcrypt.compareSync(password, findLogin.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const { id, username } = findLogin.dataValues;
  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  doLogin,
};