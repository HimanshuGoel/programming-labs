import express from 'express';
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Well done again !!!');
});

app.listen(3001, () => {
  console.log('The application is listening on port 3001!');
});
