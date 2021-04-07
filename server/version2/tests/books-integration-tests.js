const should = require('should');
const request = require('supertest');
const app = require('../app.js')
const agent = request.agent(app);

process.env.ENV = 'Test'

describe('Book crud test', () => {
    it('should allow a book t be posted and return read and _id', (done) => {
        const bookPost = { title: 'my book ' };
        agent.post('api/books').send(bookPost).expect(200).end((err, results) => {
            results.body.read.should.not.equal('false');
            results.body.should.have.property('_id');
            done();
        })
    })

    afterEach((done) => {
        console.log('Cleaning up of data after each test!!!');
        done();
    })

    after((done) => {
        // by below code we don't have to do 'ctrl + c' in console once tests are done
        app.server.close(done());
    })
})