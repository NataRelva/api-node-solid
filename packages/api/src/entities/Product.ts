import { uuid } from 'uuidv4';

export class Product {
  public readonly id: string;

  active: boolean;
  name: string;
  unidade: string;
  price_category: {
    weight_unit: number;
    packing: number;
  };
  product_categories: {
    main: string;
    sub: string;
    ordinary: string;
  };
  product_attributes: {
    weight_unit: number;
    packing: {
      packing_quantity: number;
      packing_weight: number;
    };
  };

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
