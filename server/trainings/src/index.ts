import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Welcome to Programming Labs API.');
});

app.listen(3001, () => {
  console.log(`Running on port 3001`);
});
