import { Product } from './../entities/Product';
export interface DataPurchase {
  // + products: Product [ ]
  // + finalPrice: number
  finalPrice: number;
  products: Product
}
