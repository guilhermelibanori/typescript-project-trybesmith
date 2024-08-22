import { Product } from '../types/Product';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  return { status: 'CREATED', data: newProduct.dataValues };
}

async function getAllProducts(): Promise<ServiceResponse<Product[]>> {
  const allProducts = (await ProductModel.findAll()).map((product) => product.dataValues);
  return { status: 'SUCCESSFUL', data: allProducts };
}

export default {
  createProduct,
  getAllProducts,
};