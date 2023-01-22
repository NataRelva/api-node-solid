export interface IAddress {
  number: number;
  street: string;
  district: string;
  city: string;
  state: string;
  cep: number;
}

export interface DataAddress {
  mainAddress: IAddress;
  registeredAddresses: IAddress[]
}
