import pool from '../../services/pgClient.js';
import { Plot } from '../../models/Plot.js';
import { errors } from '../../modules/errors.js';

const plotDataMapper = new Plot(pool);

export const plotController = {
    /**
     * Return a json response with all plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    allPlot: async function (request, response) {
        try {
            const plots = await plotDataMapper.findAll();

            response.json( plots );   

        } catch(error) {
            errors.error500(response, error);
        }
    },

    onePlot: async function (request, response) {
        const id = request.params.id;

        try {
            const onePlot = await plotDataMapper.findOne(id);

            response.json( onePlot );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};