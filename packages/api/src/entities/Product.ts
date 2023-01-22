import { DataCategory } from './../@types/DataCategory';
import { uuid } from 'uuidv4';

// id: number
// quantity: number
// price: number
// finalPrice: number
// category: DataCategory
// name: string
// unity: string
// provider: string

export class Product {
  public readonly id: string;

  active: boolean;
  quantity: number
  price: number
  finalPrice: number
  category: DataCategory
  name: string
  unity: string
  provider: string

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}
