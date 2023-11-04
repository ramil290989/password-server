import express from 'express';
import router from './src/routes.js';

const PORT = 3000;

const start = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use('/api', router);
  app.listen(PORT, () =>{
    console.log(`Server works on port ${PORT}`);
 });
};

export default start;
