function bookController(Book) {
    function post(req, res) {
        const body = req.body;
        const newBook = {
            title: body
        }
        res.status(201);
        res.json(newBook);
    }

    function get(req, res) {
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
    }

    return { post, get }
}

module.exports = bookController;