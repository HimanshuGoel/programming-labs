require('should');
const sinon = require('sinon');
const {
  describe, it,
} = require('mocha');

const bookController = require('../controllers/book-controller');

describe('Book Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty title on post', () => {
      const book = function (Book) {
        console.log(Book);
        this.save = () => { };
      };
      const req = {
        body: {
          author: 'jon',
        },
      };
      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = bookController(book);
      controller.get(req, res);

      // res.status.calledWith(200).should.equal(true, `bad request ${res.status.args[0][0]}`);
      res.status.calledWith(200).should.equal(true);
      res.send.calledWith('successful').should.equal(true);
    });
  });
});
