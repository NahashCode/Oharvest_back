import { APIError } from './APIError.js';

export const errorHandling = {
    /**
     * Function that send a json error message with the corresponded status code.
     * @param {APIError} error
     * @param {Request} request
     * @param {Response} response
     * @param _
     */
    manage(error, request, response, _){
        switch (error.statusCode) {
        case 403:
            response.status(400).json('Bad request');
            break;
        case 404:
            response.status(404).json('Element not found');
            break;
        default:
            response.status(error.code).json('Internal server error');
            break;
        }
    },
    notFound(request, response, next){
        next(new APIError('Not found', 404));
    }
};