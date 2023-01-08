import { Router } from 'express';
import { createUserController } from './useCases/createUser';
import { getProductListController } from './useCases/getProductList';

const router = Router();

router.post('/', (req, res) => {
  return createUserController.handle(req, res);
});

router.get('/', (req, res) => {
  return getProductListController.handle(req, res);
});

export { router };
