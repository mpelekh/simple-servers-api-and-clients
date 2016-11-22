import { GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from '../constants/ActionTypes';

export function loadAllContacts() {
    return {
        type: GET_CONTACTS_SUCCESS,
        payload: [
            {
                id: 1,
                name: 'Nick'
            },
            {
                id: 2,
                name: 'Yura'
            }    
        ]
    };
}