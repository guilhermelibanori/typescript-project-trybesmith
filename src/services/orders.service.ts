import { OrderDto } from '../types/Order';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';
import ProductModel from '../database/models/product.model';

async function getAllOrders(): Promise<ServiceResponse<OrderDto[]>> {
  const allOrders = (await OrderModel.findAll(
    { include: 
      [{ model: ProductModel, 
        as: 'productIds', 
        attributes: ['id'] }] },
  )).map((order) => ({
    ...order.dataValues,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));
  return { status: 'SUCCESSFUL', data: allOrders };
}

export default {
  getAllOrders,
};