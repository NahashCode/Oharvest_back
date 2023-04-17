import { plotDataMapper } from '../../models/Plot.js';
import { APIError } from '../../services/error/APIError.js';

export const plotController = {
    /**
     * Return a json response with all plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    allPlot: async function (request, response, next) {
        try {
            const plots = await plotDataMapper.findAll();

            response.json( plots );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with one plot present in the database.
     * @param {Request} request 
     * @param {Response} response 
     */
    onePlot: async function (request, response) {
        const onePlot = request.instance;

        response.json( onePlot );
    },

    /**
     * Create a new plot in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    createPlot: async function (request, response, next) {
        try {
            const createPlot = await plotDataMapper.create(request.body);

            response.json( createPlot );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Update an existing plot in the database and return it to a json response.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    updatePlot: async function (request, response, next) {
        const plotFound = request.instance;

        const updatedPlot = { ...plotFound, ...request.body};

        try {
            const result = await plotDataMapper.update(updatedPlot);

            response.json( result );

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },

    /**
     * Return a json response with all products by plots presents in the database.
     * @param {Request} request 
     * @param {Response} response 
     * @param {NextFunction} next
     */
    productsInPlot: async function (request, response, next) {
        try {
            const productsInPlot = await plotDataMapper.findAll();

            response.json( productsInPlot );   

        } catch(error) {
            next(new APIError('Internal server error', 500));
        }
    },
};