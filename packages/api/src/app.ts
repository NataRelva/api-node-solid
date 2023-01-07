import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import { router } from './routes';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
} else {
  dotenv.config({ path: path.join(__dirname, '../.env') });
}

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(router);
  }
}

export default App;
