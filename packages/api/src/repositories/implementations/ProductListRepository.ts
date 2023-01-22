import { DataProduct } from '../../@types/DataProduct';
import { RequestGoogleSheets } from '../RequestGoogleSheets';

import { Product } from './../../entities/Product';
import { GoogleSheetsProvider } from './../../providers/implementations/GoogleSheetsProvider';
import { IProductRepository } from './../IProductRepository';
import { uuid } from 'uuidv4';
export class ProductListRepository implements IProductRepository {
  constructor(private google: GoogleSheetsProvider) {}

  async getProductList(dataRequest: RequestGoogleSheets): Promise<DataProduct> {
    const dataSheets = await this.google.getSheetData();
    const response = await dataSheets.spreadsheets.values.get(dataRequest);
    const data = response.data.values;
    const dataProduct: DataProduct = {
      comercialelmar: [],
      rmouracereais: [],
    }
    if (data) {
       data.forEach((productRow: any[]) => {
        const product: Product = {
          id: uuid(),
          active: !productRow[20], // Se for zero é ativo
          name: productRow[0],
          quantity: 0,
          price: productRow[2],
          finalPrice: productRow[2],
          category: {
            main: productRow[9],
            secondary: productRow[10],
            third: productRow[11],
          },
          unity: productRow[6],
          provider: productRow[5],
        };

        if (product.provider == 'comercialelmar') dataProduct.comercialelmar.push(product);
        if (product.provider == 'rmouracereais') dataProduct.rmouracereais.push(product);
      });
    }
    return dataProduct
  }
}
