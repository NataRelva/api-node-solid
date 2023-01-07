import { CreateUserController } from './CreateUserController';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';
import { CreateUserUserCase } from './CreateUserUserCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUserCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
