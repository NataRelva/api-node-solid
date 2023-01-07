import { IMailProvider } from './../../providers/IMailProvider';
import { User } from './../../entities/User';
import { CreateUserRequestDTO } from './CreateUserDTO';
//     Aplicação do SOLID: O princípio da responsabilidade
// única (SRP) diz que uma classe deve ter apenas uma
// responsabilidade e que essa responsabilidade deve ser
// totalmente encapsulada pela classe.
//   Como conseguencia disso, o repositório não precisa
// saber qual é meu banco ou os metodos que preciso
// para criar um usuário. ele chamarar os metodos e executara o que precisa ser feito.

import { IUsersRepository } from './../../repositories/IUsersRepository';

export class CreateUserUserCase {
  // Aplico o padrão de inversão de dependência: Inversão de dependência é um padrão de projeto que visa diminuir o acoplamento entre classes.
  // Não usando diretamente a implementação, mas sim uma interface que descreve o que a classe deve fazer.

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  // Minha classe agora não sabe como foi implementado os metodos das interface de user apenas executa e espera o que ela promete.
  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) throw new Error('Usuário já existe!');

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: { name: data.name, email: data.email },
      from: { name: 'Made in Natural', email: 'contato@madeinnatural.com.br' },
      subject: 'Seja bem vindo a Made in Natural',
      body: 'Agora você faz parte da nossa família!',
    });
  }

  // Single-responsibility principle: O princípio da responsabilidade -> So exite um metodo que executa o que propoe a classe.
  // Open–closed principle: O princípio aberto/fechado -> A classe pode ser estendida, mas não modificada.
  // Liskov substitution principle: O princípio da substituição de Liskov -> A classe pode ser substituida por outra classe que implementa a mesma interface.
  // Interface segregation principle: O princípio da segregação de interface -> A classe não depende de uma interface que não usa.
  // Dependency inversion principle: O princípio da inversão de dependência -> A classe não depende de uma implementação, mas sim de uma interface.
}
