import { plotSchema } from './schema.js';

export const plotValidate = {
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to create page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    create(request, response, next){
        const { error } = plotSchema.validate(request.body);

        if(error){
            response.render('plot/create', { error });
        } else {
            next();
        }
    },
    
    /**
     * Validate the body submitted with the corresponding schema
     * If an error occurs, redirect to edit page
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     */
    edit(request, response, next){
        const { error } = plotSchema.validate(request.body);

        if(error){
            const plot = request.instance;
            response.render('plot/edit', { error, plot });
        } else {
            next();
        }
    }
};