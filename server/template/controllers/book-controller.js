function bookController(Book) {
  function post(req, res) {
    console.log(Book);

    const { body } = req;
    const newBook = {
      title: body,
    };
    res.status(201);
    res.json(newBook);
  }

  function get(req, res) {
    const { query } = req;
    const books = [{
      title: query,
    }];

    // implementing HATEOAS self-documentation
    const returnBooks = books.map((book) => {
      const newBook = book.toJSON();
      newBook.links = {};
      newBook.links.self = `http://${req.headers.host}/api/books/${book.id}`;
      newBook.links.filterByThisGenre = `http://${req.headers.host}/api/books?genre=${req.book.genre}`;
      return newBook;
    });
    const response = {
      books: returnBooks,
    };
    res.json(response);
  }

  function getById(req, res) {
    const params = req.params.bookId;
    const response = {
      books: [{
        title: params,
      }],
    };
    res.json(response);
  }

  function putById(req, res) {
    const { bookId } = req.params;
    const updatedBook = {};

    updatedBook.title = req.body.title;
    updatedBook.author = req.body.author;

    const response = {
      books: [{
        title: bookId,
        updatedBook,
      }],
    };
    res.json(response);
  }
  function patchById(req, res) {
    const { book } = req;
    if (req.body.id) {
      delete req.body.id;
    }

    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      book[key] = value;
    });
    res.json({ message: 'PATCH Success!!!' });
  }

  function deleteById(req, res) {
    res.json({ message: 'DELETE Success!!!' });
  }

  function extractBookInfo(req, res, next) {
    if (req.params.bookId) {
      return next();
    }
    return res.sendStatus(404);
  }

  return {
    post, get, getById, putById, patchById, deleteById, extractBookInfo,
  };
}

module.exports = bookController;
