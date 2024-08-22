import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao enviar um user inexistente, devolve um erro!', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(loginMock.notExistingHostBody);
    
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Username or password invalid" });
  });
  it('ao enviar uma senha invalida, devolve um erro!', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(loginMock.existingHostWithWrongPasswordBody);
    
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Username or password invalid" });
  });
  it('ao enviar um e-mail e uma senha válida, devolve um token!', async () => {
    const loginInstance = UserModel.build(loginMock.existingHostWithHash);

    sinon.stub(UserModel, 'findOne')
      .resolves(loginInstance);
      
    const httpResponse = await chai.request(app).post('/login').send(loginMock.validLoginBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });

});
