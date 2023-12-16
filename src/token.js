import jwt from 'jsonwebtoken';

const key = process.env.TOKENKEY || 'tokenkey';

const generateToken = (username) => jwt.sign({ username }, key, { expiresIn: '1h', algorithm: 'HS256' });

const authentikateToken = (token) => {
  const user = jwt.verify(token, key);
  return user.username;
};

export { generateToken, authentikateToken };
