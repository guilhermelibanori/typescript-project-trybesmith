import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Recuperando todas orders com sucesso', async function () {
    const orderInstance = OrderModel.bulkBuild(ordersMock.allOrders);

    sinon.stub(OrderModel, 'findAll')
      .resolves(orderInstance);
      
    const httpResponse = await chai.request(app).get('/orders');
    expect(httpResponse.status).to.equal(200);
  })

  // it('Recuperando todas orders sem sucesso', async function () {
  //   const orderInstance = OrderModel.bulkBuild(ordersMock.allOrdersWithoutProductIds);

  //   sinon.stub(OrderModel, 'findAll')
  //     .resolves(orderInstance);
      
  //   const httpResponse = await chai.request(app).get('/orders');
  //   expect(httpResponse.status).to.equal(200);
  // })
});
