import Joi from 'joi';

export const categorySchema = Joi.object({
    name: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'Le champ doit être rempli.',
        })
});