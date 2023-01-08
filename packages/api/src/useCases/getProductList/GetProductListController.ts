import { Request, Response } from 'express';
import AppError from '../../shared/errors/AppError';
import { GetProductListUserCase } from './GetProductListUserCase';
export class GetProductListController {
  constructor(private getProductListUserCase: GetProductListUserCase) {}
  async handle(resquest: Request, response: Response): Promise<Response> {
    try {
      console.log(resquest.body);
      const products = await this.getProductListUserCase.execute();
      if (!products) throw new Error('Products not found.');
      return response.status(200).json(products);
    } catch (error) {
      const errorResponse = new AppError(error.message, 400);
      return response.status(400).json(errorResponse);
    }
  }
}
