import Joi from 'joi';

/** A validating schema with Joi module for product */
export const productSchema = Joi.object({ 
    name: Joi.string().required(),
    isAvailable: Joi.boolean().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
    tip: Joi.string().required(),
    harvestBeginAt: Joi.number().integer(),
    harvestEndAt: Joi.number().integer(),
    categoryId: Joi.number().integer()
});

/** A validating schema with Joi module for availablility products */
export const updateAvailabilityProductSchema = Joi.object({
    id: Joi.number().required(),
    isAvailable: Joi.boolean().required()
});
