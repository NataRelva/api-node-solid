import { RequestGoogleSheets } from './../entities/RequestGoogleSheets';
import { Product } from './../entities/Product';

export interface IProductRepository {
  getProductList(dataRequest: RequestGoogleSheets): Promise<Product[]>;
}
