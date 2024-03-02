import express from 'express';
import { routesFn, paths } from './routesFnAndPaths/index.js';

const router = express.Router();

const {
  register,
  login,
  changeUserPassword,
  data,
  addPassword,
  editPassword,
  removePassword,
} = routesFn;

const {
  registernPath,
  loginPath,
  changeUserPasswordPath,
  dataPath,
  addPasswordPath,
  editPasswordPath,
  removedPasswordPath,
} = paths;

// регистрация
router.post(registernPath, register);
// авторизация
router.post(loginPath, login);
// проверка токена изменение пароля пользователя
router.post(changeUserPasswordPath, changeUserPassword);
// проверка токена запрос паролей
router.get(dataPath, data);
// проверка токена добавление нового пароля
router.post(addPasswordPath, addPassword);
// изменение пароля
router.post(editPasswordPath, editPassword);
// удаление пароля
router.post(removedPasswordPath, removePassword);

export default router;
