import { categoryDataMapper } from '../../models/Category.js';

export const categoryController = {
    async allCategory(request, response) {
        const categories = await categoryDataMapper.findAll();
        
        response.render( 'category/category', { categories } );
    }
};
