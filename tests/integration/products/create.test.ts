import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Cadastrando um produto novo', async function () {
    const productInstance = ProductModel.build(productsMock.mockNewProduct);

    sinon.stub(ProductModel, 'create')
      .resolves(productInstance);

    const httpResponse = await chai.request(app).post('/products').send(productsMock.mockNewProduct);

    expect(httpResponse.status).to.equal(201);
  })

});
