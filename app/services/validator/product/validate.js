import { productSchema } from './schema.js';

export const productValidate = {
    /**
    * Validate all informations inside the body based on a schema of a post
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    */
    validateBody(request, response, next){
        const { error } = productSchema.validate(request.body);

        if(error) {
            next(error);
        } else {
            next();
        }
    }
};
