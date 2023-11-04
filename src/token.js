import jwt from 'jsonwebtoken';

const key = 'ramil';

const generateToken = (username) => jwt.sign({ username }, key, { expiresIn: '1h' });

export default generateToken;
