import express from 'express';
import { routesFn, paths } from './routesFnAndPaths/index.js';

const router = express.Router();

const {
  signin,
  login,
  changeUserPassword,
  data,
  addPassword,
  editPassword,
  removePassword,
} = routesFn;

const {
  signinPath,
  loginPath,
  changeUserPasswordPath,
  dataPath,
  addPasswordPath,
  editPasswordPath,
  removedPasswordPath,
} = paths;

// регистрация
router.post(signinPath, signin);
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
router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;
