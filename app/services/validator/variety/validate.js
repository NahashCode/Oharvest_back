import { varietySchema } from './schema.js';
import { APIError } from '../../error/APIError.js';

export const varietyValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = varietySchema.validate(request.body);

        if(error) {
            response.render('variety/create', { error });
        } else {
            next();
        }
    },

    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    edit(request, response, next){
        const { error } = varietySchema.validate(request.body);

        if(error) {
            response.render('variety/edit', { error });
        } else {
            next();
        }
    }
};