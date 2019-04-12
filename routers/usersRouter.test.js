const request = require('supertest');
const usersRouter = require('../server');

describe('Users Router', () => {
  describe('GET /api/users Endpoint', () => {
    it('should respond with status code of 200', () => {
      return request(usersRouter)
        .get('/api/users')
        .expect(200);
    });

    it('should respond with an array', () => {
      return request(usersRouter)
        .get('/api/users')
        .expect(/\[.+\]/g);
    });
  });

  describe('POST /api/users Endpoint', () => {
    it('should accept post request', () => {
      return request(usersRouter)
        .post('/api/users')
        .expect(200);
    });

    it('should respond with updated array on sucessful post request', () => {
      const newUser = { 'name': 'Yoda'};

      function constainsNewUser(res) {
        const bodyAsString = JSON.stringify(res.body);
        return bodyAsString.includes(newUser.name);
      }

      return request(usersRouter)
        .post('/api/users')
        .send(newUser)
        .then(res => {
          expect(constainsNewUser(res)).toBe(true);
        });
    });
  });
});
