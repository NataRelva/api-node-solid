import { RequestGoogleSheets } from '../../repositories/RequestGoogleSheets';
import { IProductRepository } from '../../repositories/IProductRepository';
export class GetProductListUserCase {
  constructor(private productRepository: IProductRepository) {}
  async execute() {
    const request: RequestGoogleSheets = {
      range: 'A1:U',
      spreadsheetId: '1DQscIMuYNBX_zSS4hS5_WCyB5uhZ7ooplEwqRdoh1Ns',
    };
    const products = await this.productRepository.getProductList(request);

    return products;
  }
}
