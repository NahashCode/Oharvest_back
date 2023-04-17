import { Router} from 'express';
import { categoryController } from '../../controllers/backoffice/categoryController.js';

const categoryRouter = Router();

categoryRouter.get('/', categoryController.allCategory);

export { categoryRouter };