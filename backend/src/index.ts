import { config } from 'dotenv';
import { appDataSource } from "./database/DataSource";

import express, { Application, Request, Response } from 'express';

config(); // this will read the .env file and merge the key/value pairs into process.env

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // for parsing application/json
app.use(express.static(__dirname + '/../../frontend/build')); // for serving the React files

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World');
});

// starting the database and the server
appDataSource.initialize().then(async (dataSource: any) => {
  await dataSource.runMigrations().then(async () => {
      console.log('Migrations run successfully');
      app.listen(PORT);
      console.log(`Server is listening on port ${PORT}`);
  }).catch((error: any) => {
      // catching errors from migrations
      console.log('Error running migrations');
      console.error(error);
  });
}).catch((error: any) => {
  // catching errors from dataSource initialization
  console.log('Error initializing dataSource');
  console.error(error);
});

