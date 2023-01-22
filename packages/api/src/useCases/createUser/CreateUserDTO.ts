import { DataAddress } from '../../@types/DataAddress';
// Data Transfer Object: Usado para transferir dados entre camadas, como por exemplo, entre a camada de controller e a camada de useCase.
// com isso é firmado um contrato onde sabe-se o que é esperado de cada camada, ou argumentos de uma função.
// (formatos dos dados, tipos, etc) que serão passados de uma camada para outra.

export interface CreateUserRequestDTO {
  password: string;

  name: string;
  email: string;
  phone: string;
  cpfCnpj: string;
  addresses: DataAddress;
}
