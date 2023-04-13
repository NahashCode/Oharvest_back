import { Router} from 'express';
import { plotController } from '../../controllers/api/plotController.js';
import { plotMiddleware } from '../../middlewares/plotMiddleware.js';


const apiPlotRouter = Router();

/**
 * Route /api/plots
 */
apiPlotRouter.get('/', plotController.allPlot);
apiPlotRouter.post('/', plotController.createPlot);

apiPlotRouter.param('id', plotMiddleware.loadPlot);
/**
 * Route : /api/plots/:id
 */
apiPlotRouter.get('/:id', plotController.onePlot);
apiPlotRouter.put('/:id', plotController.updatePlot);

export { apiPlotRouter };