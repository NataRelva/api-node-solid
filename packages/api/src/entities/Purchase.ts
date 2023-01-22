import { DataPurchase } from './../@types/DataPurchase';
import { User } from './User';
import { uuid } from 'uuidv4';
export class Purchase {

  public readonly id: string;

  dataPurchase: DataPurchase;
  buyer: User

  constructor ( props: Omit<Purchase, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }

}
