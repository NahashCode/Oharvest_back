import pool from '../services/pgClient.js';
import { Product } from '../models/Product.js';
import { errors } from '../modules/errors.js';

const productDataMapper = new Product(pool);

export const productMiddleware = {
    /**
    * Load a product item inside the request object
    * If the item exist, stock inside request.instance
    * Otherwise, send an error with status 400.
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    * @param {Number} id Id of a product
    */
    async loadProduct(request, response, next, id){
        try {
            const productFound = await productDataMapper.findOne(id);
            if (productFound) {
                request.instance = productFound;
                next();
            } else {
                errors.error400(response);
            }
        } catch(error){
            errors.error500(response, error);
        }       
    }
};
