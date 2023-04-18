import { Router} from 'express';
import { varietyController } from '../../controllers/backoffice/varietyController.js';

const varietyRouter = Router();

varietyRouter.get('/', varietyController.allVariety);

export { varietyRouter };