import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Recuperando todos produtos com sucesso', async function () {
    const productInstance = ProductModel.bulkBuild(productsMock.allProducts);

    sinon.stub(ProductModel, 'findAll')
      .resolves(productInstance);
      
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
  })


});
