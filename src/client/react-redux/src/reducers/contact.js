import {
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
    contact: {},
    isLoaded: false
};

export default function contact(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACT_REQUEST:
            return {...state };
        case GET_CONTACT_SUCCESS:
            return {...state, contact: action.payload, isLoaded: true };
        default:
            return state;
    }
}
