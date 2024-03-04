#! /usr/bin/env node
import express from 'express';
import 'dotenv/config';
import router from './src/routes.js';

const { PORT } = process.env;

const start = () => {
  const app = express();
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', router);
  app.listen(PORT, () => {
    console.log(`Server works on port ${PORT}`);
  });
};

export default start;
