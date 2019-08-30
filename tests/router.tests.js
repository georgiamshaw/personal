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
    t.error(error, 'an error has not been thrown')
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

test('public route returns correct status code and content type', t => {
  supertest(router)
  .get('/public/script.js')
  .end((error, response) => {
    t.error(error, 'script.js does not throw an error');
    t.equal(response.statusCode, 200, 'script.js returns a 200 status code');
    t.equal(
      response.headers['content-type'],
      'application/javascript',
      'script.js returns the correct content type'
    );
  })

  supertest(router)
  .get('/public/style.css')
  .end((error, response) => {
    t.error(error, 'style.css does not throw an error');
    t.equal(response.statusCode, 200, 'style.css returns a 200 status code');
    t.equal(
      response.headers['content-type'],
      'text/css',
      'style.css returns the correct content type'
    );
  })
})
