const Joi = require('joi');

module.exports = Joi.object({
    age: Joi.number().integer(),
    name: Joi.string().min(2).max(30).required(),
    gender: Joi.string().min(4).max(4),
    company: Joi.string().max(30),
    email: Joi.string().email(),
    phone: Joi.string().max(30),
    address: Joi.string().max(100),
    about: Joi.string().max(100),
    created: Joi.date(),
    updated: Joi.date()
});
