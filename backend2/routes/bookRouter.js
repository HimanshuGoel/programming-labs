const express = require('express');
const booksController = require('../controllers/booksController')

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController({})

  bookRouter.route('/books')
    .post(controller.post)
    .get(controller.get)

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
