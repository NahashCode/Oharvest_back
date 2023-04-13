import pool from '../../services/pgClient.js';
import { Product } from '../../models/Product.js';
import { errors } from '../../modules/errors.js';

const productDataMapper = new Product(pool);

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
        const id = request.params.id;

        try {
            const oneProduct = await productDataMapper.findOne(id);

            response.json( oneProduct );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};