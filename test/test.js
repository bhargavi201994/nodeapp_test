var request = require('supertest');
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with Hello World', function(done) {
        request(app)
            .get('/will')
            .expect(200)  // Expecting a 200 OK response
            .expect({ response: 'Hello World' })  // Expecting a JSON response
            .end(done);  // Call done when the assertions are complete
    });
});
