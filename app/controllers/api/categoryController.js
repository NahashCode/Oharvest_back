import pool from '../../services/pgClient.js';
import { Category } from '../../models/Category.js';
import { errors } from '../../modules/errors.js';

const categoryDataMapper = new Category(pool);

export const categoryController = {
    /**
     * Return a json response with all categories presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allCategory: async function (request, response) {
        try {
            const categories = await categoryDataMapper.findAll();

            response.json( categories );   

        } catch(error) {
            errors.error500(response, error);
        }
    },

    oneCategory: async function (request, response) {
        const oneCategory = request.instance;

        response.json( oneCategory );
    },

    createCategory: async function (request, response) {
        const { name } = request.body;

        if (typeof name != 'string' || name.length < 2) {
            return errors.error400(response);
        }

        try {
            const createCategory = await categoryDataMapper.create({name});

            response.json( createCategory );

        } catch(error) {
            errors.error500(response, error);
        }
    },

    updateCategory: async function (request, response) {
        const updateCategory = request.instance;

        const { name } = request.body;

        if (typeof name != 'string' || name.length < 2) {
            return errors.error400(response);
        }

        try {
            updateCategory.name = name;

            const result = await categoryDataMapper.update(updateCategory);

            response.json( result );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};