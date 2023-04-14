import { plotSchema } from './schema.js';

export const plotValidate = {
    validateBody(request, response, next){
        const { error } = plotSchema.validate(request.body);

        if(error){
            next(error);
        } else {
            next();
        }
    }
};