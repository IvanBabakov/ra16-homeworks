import {CHANGE_SERVICE_FIELD, EDITTING_SERVICE, ADD_SERVICE_SUCCESS, ADD_SERVICE_REQUEST, ADD_SERVICE_ERROR} from '../actions/actionTypes'

const initialState = {
    items: {
        id: '',
        name: '',
        price: '',
        content: ''
    },
    loading: false,
    error: null,
    status: null
};

export default function serviceAddReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, items:{...state.items, [name]: value}};
        case ADD_SERVICE_SUCCESS:
            const {newStatus} = action.payload
            return {...initialState, status: newStatus}
        case ADD_SERVICE_REQUEST:
            return {...state, loading: true, error: null}
        case ADD_SERVICE_ERROR:
            // const {error} = action.payload;
            return {...state, loading: false, error: true}
        case EDITTING_SERVICE:
            const {service} = action.payload;
            if(service !== undefined) {
                return {...state, items: {...service},loading: false, status: null};
            } else {
                return {...initialState}
            }
        default:
            return state;
    }
}