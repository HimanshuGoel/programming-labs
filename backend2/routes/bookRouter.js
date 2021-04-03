const express = require('express');

function routes(Book) {
  const bookRouter = express.Router();
  bookRouter.route('/books')
    .post((req, res) => {
      const body = req.body;
      const newBook = {
        title: body
      }
      res.status(201).json(newBook)
    })
    .get((req, res) => {
      const { query } = req;
      const books = [{
        title: query
      }]

      // implementing HATEOAS self-documentation
      const returnBooks = books.map((book) => {
        const newBook = book.toJSON();
        newBook.links = {};
        newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`
        newBook.links.filterByThisGenre = `http://${req.headers.host}/api/books?genre=${req.book.genre}`
        return newBook;
      })
      const response = {
        books: returnBooks
      }
      res.json(response)
    })

  bookRouter.use('/books/:bookId', (req, res, next) => {
    if (req.params.bookId) {
      return next();
    } else {
      return res.sendStatus(404)
    }
  })

  bookRouter.route('/books/:bookId')
    .get((req, res) => {
      const params = req.params.bookId
      const response = {
        books: [{
          title: params
        }]
      }
      res.json(response)
    })
    .put((req, res) => {
      const bookId = req.params.bookId

      const updatedBook = {};
      updatedBook.title = req.body.title;
      updatedBook.author = req.body.author;

      const response = {
        books: [{
          title: bookId,
          updatedBook: updatedBook
        }]
      }
      res.json(response)
    })
    .patch((req, res) => {
      const { book } = req;
      if (req.body._id) {
        delete req.body.id;
      }

      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      })

      res.json(message: 'PATCH Success!!!')
    })
    .delete((req, res) => {
      res.json(message: 'DELETE Success!!!')
    })

  return bookRouter;
}

module.exports = routes;
