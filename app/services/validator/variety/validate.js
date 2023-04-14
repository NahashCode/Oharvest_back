import { varietySchema } from './schema.js';

export const varietyValidate = {
    /**
    * Validate all informations inside the body based on a schema of a post
    * @param {Request} request 
    * @param {Response} response 
    * @param {next} next 
    */
    validateBody(request, response, next){
        const { error } = varietySchema.validate(request.body);

        if(error) {
            next(error);
        } else {
            next();
        }
    }
};