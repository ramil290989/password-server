import jwt from 'jsonwebtoken';

const key = 'ramil';

const generateToken = (username) => {
  return jwt.sign({ username }, key, {expiresIn: '1h'});
};

export { generateToken }
