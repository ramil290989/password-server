import { register, registernPath } from './register.js';
import { login, loginPath } from './login.js';
import { changeUserPassword, changeUserPasswordPath } from './changeUserPassword.js';
import { data, dataPath } from './data.js';
import { addPassword, addPasswordPath } from './addPassword.js';
import { editPassword, editPasswordPath } from './editPassword.js';
import { removePassword, removedPasswordPath } from './removePassword.js';

const routesFn = {
  register,
  login,
  changeUserPassword,
  data,
  addPassword,
  editPassword,
  removePassword,
};

const paths = {
  registernPath,
  loginPath,
  changeUserPasswordPath,
  dataPath,
  addPasswordPath,
  editPasswordPath,
  removedPasswordPath,
};

export { routesFn, paths };
