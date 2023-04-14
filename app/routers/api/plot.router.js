import { Router} from 'express';
import { plotController } from '../../controllers/api/plotController.js';
import { plotMiddleware } from '../../middlewares/plotMiddleware.js';
import { plotValidate } from '../../services/validator/plot/validate.js';

const apiPlotRouter = Router();

/**
 * Route /api/plots
 */
apiPlotRouter.get('/', plotController.allPlot);
apiPlotRouter.post('/', plotValidate.validateBody, plotController.createPlot);

apiPlotRouter.param('id', plotMiddleware.loadPlot);
/**
 * Route : /api/plots/:id
 */
apiPlotRouter.get('/:id(\\d+)', plotController.onePlot);
apiPlotRouter.put('/:id(\\d+)', plotValidate.validateBody, plotController.updatePlot);

export { apiPlotRouter };