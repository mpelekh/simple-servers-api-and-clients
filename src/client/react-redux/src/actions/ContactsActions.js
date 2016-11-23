import { GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from '../constants/ActionTypes';
import { API_URL } from '../constants/api';

export function loadAllContacts() {
    return dispatch => {
        dispatch({
            type: GET_CONTACTS_REQUEST
        });

        fetch(API_URL)
            .then(response => response.json())
            .then(contacts => {
                return dispatch({
                    type: GET_CONTACTS_SUCCESS,
                    payload: contacts
                });
            })
            .catch(error => {
                console.log('--- error', error);
            });
    }


}