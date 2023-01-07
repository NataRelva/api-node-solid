// Data Transfer Object: Usado para transferir dados entre camadas, como por exemplo, entre a camada de controller e a camada de useCase.
// com isso é firmado um contrato onde sabe-se o que é esperado de cada camada, ou argumentos de uma função.
// (formatos dos dados, tipos, etc) que serão passados de uma camada para outra.

export interface CreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf_cnpj: string;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
  };
}
