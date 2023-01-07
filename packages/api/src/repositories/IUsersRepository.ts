// Os repositórios são responsáveis pela camada de acesso aos dados, descrevendo os métodos que serão utilizados para acessar os dados.
import { User } from './../entities/User';
export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
}
