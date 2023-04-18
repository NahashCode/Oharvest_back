import { Router} from 'express';
import { productController } from '../../controllers/backoffice/productController.js';

const productRouter = Router();

productRouter.get('/', productController.allProduct);

export { productRouter };