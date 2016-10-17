const Boom = require('boom');
const dbApi = require('../../../../db/api');

module.exports = {
    contacts,
    contact,
    contactCreate,
    contactUpdate,
    contactDelete
};

function contacts(request, reply) {
    dbApi
        .find()
        .then(items => {
            items
                ? reply(items)
                : reply(Boom.notFound());
        })
        .catch(error => reply(Boom.wrap(error)));
}

function contact(request, reply) {
    const { id } = request.params;

    dbApi
        .find({_id: id})
        .then(item => {

            item
                ? reply(item)
                : reply(Boom.notFound());
        })
        .catch(error => reply(Boom.wrap(error)));
}

function contactCreate(request, reply) {
    const contact = request.params;

    dbApi
        .insert(contact)
        .then(item => reply(item))
        .catch(error => reply(Boom.wrap(error)));
}

function contactUpdate(request, reply) {
    reply(Boom.notFound());
}

function contactDelete(request, reply) {
    reply(Boom.notFound());
}

