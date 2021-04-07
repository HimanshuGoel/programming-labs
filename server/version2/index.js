const express = require('express');

const Book = require('./models/book-model');
const bookRouter = require('./routes/book-router.js')(Book);

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/api', bookRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Programming Labs API.');
});

app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
