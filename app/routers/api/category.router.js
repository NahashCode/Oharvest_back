import { Router} from 'express';
import { categoryController } from '../../controllers/api/categoryController.js';
import { categoryMiddleware } from '../../middlewares/categoryMiddleware.js';

const apiCategoryRouter = Router();

/**
 * Route : /api/categories
 */
apiCategoryRouter.get('/', categoryController.allCategory);
apiCategoryRouter.post('/', categoryController.createCategory);

apiCategoryRouter.param('id', categoryMiddleware.loadCategory);
/**
 * Route : /api/categories/:id
 */
apiCategoryRouter.get('/:id', categoryController.oneCategory);
apiCategoryRouter.put('/:id', categoryController.updateCategory);

export { apiCategoryRouter };