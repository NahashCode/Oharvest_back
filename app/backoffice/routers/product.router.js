import { Router} from 'express';
import { productController } from '../controllers/productController.js';
import { productValidate } from '../../services/validator/product/validate.js';
import { productMiddleware } from '../../middlewares/productMiddleware.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';

const productRouter = Router();

/**
 * Route : /admin/products
 */
productRouter.get('/', productController.listPage);
productRouter.get('/create', categoryMiddleware.loadCategories,  productController.createPage);
productRouter.post('/create', productValidate.validateBody, productController.createAction);

productRouter.param('id', productMiddleware.loadProduct);
productRouter.get('/:id(\\d+)/detail', categoryMiddleware.loadCategories, productController.detailPage);
/**
 * Route : /admin/products/:id/edit
 */
productRouter.get('/:id(\\d+)/edit', categoryMiddleware.loadCategories, productController.editPage);
productRouter.post('/:id(\\d+)/edit', productValidate.validateBody, productController.editAction);

/**
 * Route : /admin/products/:id/delete
 */
productRouter.get('/:id(\\d+)/delete', productController.deleteAction);

export { productRouter };