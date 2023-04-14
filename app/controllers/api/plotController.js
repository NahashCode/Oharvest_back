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
        const onePlot = request.instance;

        response.json( onePlot );
    },

    createPlot: async function (request, response) {
        try {
            const createPlot = await plotDataMapper.create(request.body);

            response.json( createPlot );

        } catch(error) {
            errors.error500(response, error);
        }
    },

    updatePlot: async function (request, response) {
        const plotFound = request.instance;

        const updatedPlot = { ...plotFound, ...request.body};

        try {
            const result = await plotDataMapper.update(updatedPlot);

            response.json( result );

        } catch(error) {
            errors.error500(response, error);
        }
    },
};