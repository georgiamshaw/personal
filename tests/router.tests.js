const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('tests are running', t => {
  t.equal(1, 1, 'our tests are running');
  t.end();
});

test('home route works', t => {
  supertest(router)
  .get('/')
  .expect(200)
  .end((error, response) => {
    t.error(error, 'an error has been thrown')
    t.equal(
      response.statusCode,
      200,
      'home has a statuscode of 200');
    t.equal(
      response.headers['content-type'],
      'text/html',
      'home route has correct content type - html'
    );
    t.end();
  });
});
