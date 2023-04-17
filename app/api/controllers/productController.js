import { productDataMapper } from '../../models/Product.js';
import { errors } from '../../modules/errors.js';

export const productController = {
    /**
     * Return a json response with all products presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allProduct: async function (request, response) {
        try {
            const products = await productDataMapper.findAll();

            response.json( products );   

        } catch(error) {
            errors.error500(response, error);
        }
    },

    oneProduct: async function (request, response) {
        const oneProduct = request.instance;

        response.json( oneProduct );
    },

    createProduct: async function (request, response) {
        try {
            const createProduct = await productDataMapper.create(request.body);

            response.json( createProduct );

        } catch(error) {
            errors.error500(response, error);
        }
    },

    updateProduct: async function (request, response) {
        const productFound = request.instance;

        const updatedProduct = {...productFound, ...request.body};

        try {
            const result = await productDataMapper.update(updatedProduct);

            response.json( result );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};