import {
    GET_CONTACTS_REQUEST,
    GET_CONTACTS_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
    contacts: [],
    isLoaded: false
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS_REQUEST:
            return {...state };
        case GET_CONTACTS_SUCCESS:
            return {...state, contacts: action.payload, isLoaded: true };
        default:
            return state;
    }
}
