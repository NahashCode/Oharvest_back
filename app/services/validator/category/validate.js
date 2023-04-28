import { categorySchema } from './schema.js';

export const categoryValidate = {
    /**
     *
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    validateBody(request, response, next){
        const { error } = categorySchema.validate(request.body);

        if(error){
            response.render('category/create', { error });
        } else {
            next();
        }
    }
};