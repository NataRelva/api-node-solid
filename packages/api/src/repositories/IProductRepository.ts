import { DataProduct } from './../@types/DataProduct';
import { RequestGoogleSheets } from './RequestGoogleSheets';

export interface IProductRepository {
  getProductList(dataRequest: RequestGoogleSheets): Promise<DataProduct>;
}
