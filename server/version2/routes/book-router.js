const express = require('express');

const booksController = require('../controllers/book-controller')

function routes(Book) {
    const bookRouter = express.Router();
    const controller = booksController({});

    bookRouter.route('/books')
        .post(controller.post)
        .get(controller.get)

    bookRouter.use('/books/:bookId', controller.extractBookInfo)

    bookRouter.route('/books/:bookId')
        .get(controller.getById)
        .put(controller.putById)
        .patch(controller.patchById)
        .delete(controller.deleteById)
    return bookRouter;
}

module.exports = routes;
