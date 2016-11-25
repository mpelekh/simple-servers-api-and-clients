import { GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS } from '../constants/ActionTypes';
import { API_URL } from '../constants/api';

export function loadContact(id) {
    return dispatch => {
        dispatch({
            type: GET_CONTACT_REQUEST
        });

        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(contact => {
                return dispatch({
                    type: GET_CONTACT_SUCCESS,
                    payload: contact
                });
            })
            .catch(error => {
                console.log('--- error', error);
            });
    }
}