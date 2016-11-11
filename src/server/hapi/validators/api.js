const Joi = require('joi');

module.exports = Joi.object({
    _id: Joi.string(),
    guid: Joi.string(),
    isActive: Joi.boolean(),
    picture: Joi.string(), 
    age: Joi.number().integer(),
    name: Joi.string().min(2).max(30).required(),
    gender: Joi.string().min(4).max(6),
    company: Joi.string().max(30),
    email: Joi.string().email(),
    phone: Joi.string().max(30),
    address: Joi.string().max(100),
    about: Joi.string().max(500),
    created: Joi.string(),
    updated: Joi.string()
});
