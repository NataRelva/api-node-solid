import { v4 as uuid } from 'uuid';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  public phone: string;
  public cpf_cnpj: string;
  public address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
  };

  constructor(props: Omit<User, 'id'>, id?: string) {
    // Pega todas as propriedades de props e adiciona uma por uma dentro do objeto this
    Object.assign(this, props);

    // Não deixar a responsabilidade de criar um id para o banco de dados
    // Motivação: Se o banco de dados for trocado, o id pode ser gerado de outra forma e o código não vai precisar ser alterado.
    // dessa forma o código fica mais flexível e menos acoplado.
    if (!id) {
      this.id = uuid();
    }
  }
}
