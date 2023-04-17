import { plotDataMapper } from '../models/Plot.js';
import { errors } from '../modules/errors.js';

export const plotMiddleware = {
    /**
    * Load a plot item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a plot
    */
    async loadPlot(request, response, next, id){
        try {
            const plotFound = await plotDataMapper.findOne(id);
            if (plotFound) {
                request.instance = plotFound;
                next();
            } else {
                errors.error400(response);
            }
        } catch(error){
            errors.error500(response, error);
        }       
    }
};

