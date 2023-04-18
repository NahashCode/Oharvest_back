import { Router } from 'express';
import { productController } from '../controllers/productController.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';
import { productValidate } from '../../services/validator/product/validate.js';

const apiProductRouter = Router();

/**
 * Route : /api/products
 */
apiProductRouter.get('/', productController.allProduct);
apiProductRouter.post('/', productValidate.validateBody, productController.createProduct);

apiProductRouter.param('id', productMiddleware.loadProduct);
/**
 * Route : /api/products/:id
 */
apiProductRouter.get('/:id(\\d+)', productController.oneProduct);
apiProductRouter.put('/:id(\\d+)', productValidate.validateBody, productController.updateProduct);

export { apiProductRouter };