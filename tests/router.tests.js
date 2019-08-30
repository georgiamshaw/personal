const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('tests are running', t => {
  t.equal(1, 1, 'our tests are running');
  t.end();
});
