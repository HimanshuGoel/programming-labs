const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./models/book-model')
const bookRouter = require('./routes/bookRouter.js')(Book)

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api', bookRouter)

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('welcome to my api!')
});

app.server = app.listen(port, () => {
  console.log('running on port ' + port)
});
