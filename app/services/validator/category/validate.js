import { categorySchema } from './schema.js';

export const categoryValidate = {
    validateBody(request, response, next){
        const { error } = categorySchema.validate(request.body);

        if(error){
            next(error);
        } else {
            next();
        }
    }
};