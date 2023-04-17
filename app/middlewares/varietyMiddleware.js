import { varietyDataMapper } from '../models/Variety.js';
import { errors } from '../modules/errors.js';

export const varietyMiddleware = {
    /**
    * Load a variety item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a variety
    */
    async loadVariety(request, response, next, id){
        try {
            const varietyFound = await varietyDataMapper.findOne(id);
            if (varietyFound) {
                request.instance = varietyFound;
                next();
            } else {
                errors.error400(response);
            }
        } catch(error){
            errors.error500(response, error);
        }       
    }
};