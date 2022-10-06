var app = require('./../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;
describe('Server Running Health', function() {
  it('should return string', function(done) {
    request(app)
      .get('/openstreetmap/health')
      .end(function(err, res) {
        expect(res.body.message).to.equal("OpenStreetMap Application is healthy.");
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Swagger Documentation', function() {
  it('should return json docs', function(done) {
    request(app)
      .get('/openstreetmap/swagger')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Error: Map API 400 error', function() {
  it('should return 400 error if required params not pass', function(done) {
    request(app)
      .get('/openstreetmap/map')
      .end(function(err, res) {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});

describe('Response: Map API 200', function() {
  it('resolves as promised',  function() {//done
    request(app)
      .get('/openstreetmap/map')
      .query({
        minLon: '73.0280',
        minLat: '33.0585',
        maxLon: '74.0706',
        maxLat: '33.0890'
      })
      .then( function(err, res) {
        expect(res.statusCode).to.equal(200);
        // done();
      });
  });
});
