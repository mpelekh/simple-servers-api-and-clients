var Joi = require('joi');

module.exports = Joi.object({
    _id: Joi.number().optional(),
    name: Joi.string().min(2).max(30).required(),
    gender: Joi.string().min(4).max(4),
    title: Joi.string().max(30),
    phone_number: Joi.string().max(30),
    email: Joi.string().email(),
    street_address: Joi.string().max(100),
    city: Joi.string().max(100),
    state: Joi.string().alphanum().max(30),
    zip_code: Joi.string().max(30),
    created: Joi.date(),
    updated: Joi.date()
});

//module.exports = {
//    contact: Joi.object({
//        _id: Joi.number().optional(),
//        name: Joi.string().min(2).max(30).required(),
//        gender: Joi.string(4),
//        title: Joi.string().max(30),
//        phone_number: Joi.string().max(30),
//        email: Joi.string().email(),
//        street_address: Joi.string().max(100),
//        city: Joi.string().max(100),
//        state: Joi.string().alphanum().max(30),
//        zip_code: Joi.string().max(30),
//        created: Joi.date(),
//        updated: Joi.date()
//    })
//};