import jwt from 'jsonwebtoken';

const key = 'ramil';

const generateToken = (username) => jwt.sign({ username }, key, { expiresIn: '1h', algorithm: 'HS256' });

const authentikateToken = (token) => {
  const user = jwt.verify(token, key);
  return user.username;
};

export { generateToken, authentikateToken };
