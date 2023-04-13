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
        const id = request.params.id;

        try {
            const oneVariety = await varietyDataMapper.findOne(id);

            response.json( oneVariety );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};