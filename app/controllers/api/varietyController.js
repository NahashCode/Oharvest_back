import pool from '../../services/pgClient.js';
import { Variety } from '../../models/Variety.js';
import { errors } from '../../modules/errors.js';

const varietyDataMapper = new Variety(pool);

export const varietyController = {
    /**
     * Return a json response with all varieties presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allVariety: async function (request, response) {
        try {
            const varieties = await varietyDataMapper.findAll();

            response.json( varieties );   

        } catch(error) {
            errors.error500(response, error);
        }
    },

    oneVariety: async function (request, response) {
        const oneVAriety = request.instance;

        response.json( oneVAriety );
    },

    createVariety: async function (request, response) {
        try {
            const createVariety = await varietyDataMapper.create(request.body);

            response.json( createVariety );

        } catch(error) {
            errors.error500(response, error);
        }
    },

    updateVariety: async function (request, response) {
        const varietyFound = request.instance;

        const updatedVariety = {...varietyFound, ...request.body};

        try {
            const result = await varietyDataMapper.update(updatedVariety);

            response.json( result );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};