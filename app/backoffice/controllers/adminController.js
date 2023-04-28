export const adminController = {
    /**
     * Render of the dashboard
     * @param {Request} request
     * @param {Response} response
     */
    home: function (request, response) {
        response.render( 'home' );
    },
};