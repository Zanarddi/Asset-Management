import { config } from 'dotenv';
import express, { Application, Request, Response } from 'express';

config(); // this will read the .env file and merge the key/value pairs into process.env

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // for parsing application/json
app.use(express.static(__dirname + '/../../frontend/build')); // for serving the React files


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World');
});