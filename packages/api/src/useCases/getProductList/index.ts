import { GetProductListController } from './GetProductListController';
import { GoogleSheetsProvider } from './../../providers/implementations/GoogleSheetsProvider';
import { ProductListRepository } from './../../repositories/implementations/ProductListRepository';
import { GetProductListUserCase } from './GetProductListUserCase';

const googleSheetsProvider = new GoogleSheetsProvider();
const productListRepository = new ProductListRepository(googleSheetsProvider);

const getProductList = new GetProductListUserCase(productListRepository);

const getProductListController = new GetProductListController(getProductList);

export { getProductList, getProductListController };
