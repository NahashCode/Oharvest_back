import { Router} from 'express';
import { plotController } from '../../controllers/backoffice/plotController.js';

const plotRouter = Router();

plotRouter.get('/', plotController.allPlot);

export { plotRouter };