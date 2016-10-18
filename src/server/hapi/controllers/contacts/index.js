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
    const contact = request.payload;

    dbApi
        .insert(contact)
        .then(item => reply(item))
        .catch(error => reply(Boom.wrap(error)));
}

function contactUpdate(request, reply) {
    const { id } = request.params;
    const contact = request.payload;

    dbApi
        .update({_id: id}, contact)
        .then(item => reply(item))
        .catch(error => reply(Boom.wrap(error)));
}

function contactDelete(request, reply) {
    const { id } = request.params;

    dbApi
        .remove({_id: id})
        .then(() => reply())
        .catch(error => reply(Boom.wrap(error)));
}

