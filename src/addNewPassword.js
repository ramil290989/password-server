import state from './state.js';
import writePasswords from './writePasswords.js';

const { passwords } = state;

const addNewPassword = (newPassword) => {
  passwords.push(newPassword);
  writePasswords(passwords);
};

export default addNewPassword;
