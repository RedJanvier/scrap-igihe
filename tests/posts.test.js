import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('[ GET /api/v2/posts ] get all posts in db', () => {
  it('returns an array of all members', (done) => {
    chai
      .request(app)
      .get('/api/v2/posts')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        if (err) console.log(err);
        done();
      });
  });
});
