const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const uuid = require('node-uuid');

const FILE_AS_DB = path.join(__dirname, 'contacts.json');

module.exports = {
    find,
    insert,
    update,
    remove
};

function find(query = {}) {
    const { _id } = query;

    return _getJson()
        .then(items => {
            let result = null;

            if (_id) {
                result = items.filter(item => _id === item._id)[0];
            } else {
                result = items;
            }

            return result;
        });
}

function insert(obj) {
    return _insertIntoJson(obj);
}

function update(query, value) {
    return _updateJson(query, value);
}

function remove(query){
    return _removeFromJson(query);
}

/**
 * Private functions
 */
function _getJson() {
    return new Promise((resolve, reject) => {
        fs.readFile(FILE_AS_DB, (error, result) => {
            error
                ? reject(error)
                : resolve(JSON.parse(result));
        });
    });
}

function _insertIntoJson(obj) {
    if (!obj) {
        return Promise.reject(new Error(`Insert object cannot be null`));
    }

    obj._id = crypto.randomBytes(12).toString('hex');
    obj.created = new Date();
    obj.guid = uuid.v4();

    return _getJson()
        .then(items => items.concat(obj))
        .then(items => _writeToJson(items))
        .then(() => obj);
}

function _updateJson(query = {}, value = null) {
    const { _id } = query;

    if(!_id || !value) {
        return Promise.reject(new Error(`Update parameters are incorrect`));
    }

    let updatedObject = null;

    return _getJson()
        .then(items => items.map((item, index, array) => {
            if(_id === item._id) {
                updatedObject = Object.assign({}, array[index], value); 
                array[index] = updatedObject;
            }

            return array[index];
        }))
        .then(items => _writeToJson(items))
        .then(() => updatedObject);
}

function _removeFromJson(query = {}) {
    const { _id } = query;

    if(!_id) {
        return Promise.reject(new Error(`Remove parameter is incorrect`));
    }

    return _getJson()
        .then(items => items.filter(item => _id !== item._id))
        .then(items => _writeToJson(items));
}

function _writeToJson(obj) {
    return new Promise((resolve, reject) => {
        fs.writeFile(FILE_AS_DB, JSON.stringify(obj), (error) => {
            error
                ? reject(error)
                : resolve();
        });
    });
}
