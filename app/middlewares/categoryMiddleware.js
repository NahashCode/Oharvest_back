import pool from '../services/pgClient.js';
import { Category } from '../models/Category.js';
import { errors } from '../modules/errors.js';

const categoryDataMapper = new Category(pool);

export const categoryMiddleware = {
    /**
    * Load a category item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a category
    */
    async loadCategory(request, response, next, id){
        try {
            const categoryFound = await categoryDataMapper.findOne(id);
            if (categoryFound) {
                request.instance = categoryFound;
                next();
            } else {
                errors.error400(response);
            }
        } catch(error){
            errors.error500(response, error);
        }       
    }
};

