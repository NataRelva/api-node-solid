import { Request, Response } from 'express';
import { CreateUserUserCase } from './CreateUserUserCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUserCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, password, cpf_cnpj, address } = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        phone,
        password,
        cpf_cnpj,
        address,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
