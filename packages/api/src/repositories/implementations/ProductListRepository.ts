import { RequestGoogleSheets } from './../../entities/RequestGoogleSheets';

import { Product } from './../../entities/Product';
import { GoogleSheetsProvider } from './../../providers/implementations/GoogleSheetsProvider';
import { IProductRepository } from './../IProductRepository';
import { uuid } from 'uuidv4';
export class ProductListRepository implements IProductRepository {
  constructor(private google: GoogleSheetsProvider) {}

  async getProductList(dataRequest: RequestGoogleSheets): Promise<Product[]> {
    const dataSheets = await this.google.getSheetData();
    const response = await dataSheets.spreadsheets.values.get(dataRequest);
    const data = response.data.values;
    if (data) {
      return data.map((productRow: any[]) => {
        const product_attributes_packing = productRow[14];

        let packing_weight: number = 0;
        let packing_quantity: number = 0;

        let price_category_packing = 0;

        if (typeof product_attributes_packing == 'string') {
          const product_attributes_packing_data = product_attributes_packing.split(' ');
          if (product_attributes_packing_data.length > 1) {
            packing_weight = Number(product_attributes_packing_data[3].replace('g', ''));
            packing_quantity = Number(product_attributes_packing_data[1]);
          }
        }

        if (typeof productRow[20] == 'number') {
          price_category_packing = productRow[20];
        }

        const product: Product = {
          id: uuid(),
          active: !productRow[4], // Se for zero é ativo
          name: productRow[0],
          unidade: productRow[6],
          price_category: {
            weight_unit: productRow[18],
            packing: price_category_packing,
          },
          product_categories: {
            main: productRow[9],
            sub: productRow[10],
            ordinary: productRow[11],
          },
          product_attributes: {
            weight_unit: productRow[1],
            packing: {
              packing_quantity,
              packing_weight,
            },
          },
        };
        return product;
      });
    }
    return [];
  }
}
