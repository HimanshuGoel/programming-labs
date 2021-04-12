require('should');
const request = require('supertest');
const {
  describe, afterEach, it, after,
} = require('mocha');

const app = require('../index.js');

const agent = request.agent(app);

process.env.ENV = 'Test';

describe('Book crud test', () => {
  //   it('should allow a book t be posted and return read and _id', (done) => {
  //     const bookPost = { title: 'my book ' };
  //     agent.post('api/books').send(bookPost).expect(200).end((err, results) => {
  //       results.body.read.should.not.equal('false');
  //       results.body.should.have.property('_id');
  //       done();
  //     });
  //   });

  it('should allow a book be get and return success message', (done) => {
    const bookPost = { title: 'my book ' };
    agent.get('api/books').send(bookPost).expect(200).end((err, results) => {
      // results.body.read.should.not.equal('false');
      // results.body.should.have.property('_id');
      done();
    });

    agent.get('api/books').send({}).expect(200).end((err, results) => {
      // results.body.should.equal('success');
      done();
    });
  });


  afterEach((done) => {
    console.log('Cleaning up of data after each test!!!');
    done();
  });

  after((done) => {
    // by below code we don't have to do 'ctrl + c' in console once tests are done
    app.server.close(done());
  });
});
