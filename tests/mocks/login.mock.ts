const validPassword = 'sortudo';
const validUser = 'Eddie';
const notExistingHostBody = { username: 'Cleiton', password: validPassword };
const existingHostWithWrongPasswordBody = { username: validUser, password: 'wrong_password' };
const hashPassword = '$2a$10$cVJST0p2xJaxcSEfxE0Bd.EOZFJD.UHNGSNg.72i0DJYoGtz79m7u';

const existingHostWithHash = {
  id: 1,
  username: validUser,
  password: hashPassword,
  vocation: 'Guerreiro',
  level: 8,
};

const validLoginBody = { username: validUser, password: validPassword };

export default {
  notExistingHostBody,
  existingHostWithWrongPasswordBody,
  existingHostWithHash,
  validLoginBody
};