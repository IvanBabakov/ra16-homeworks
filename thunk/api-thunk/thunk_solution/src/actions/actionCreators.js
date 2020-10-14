import {ADD_SERVICE_SUCCESS, ADD_SERVICE_ERROR, ADD_SERVICE_REQUEST, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDITTING_SERVICE, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_REQUEST, FETCH_SERVICES_ERROR} from './actionTypes';

export function addServiceSuccess(newStatus) {
    return {type: ADD_SERVICE_SUCCESS, payload: {newStatus}};
}

export function addServiceRequest() {
    return {type: ADD_SERVICE_REQUEST};
}

export function addServiceError() {
    return {type: ADD_SERVICE_ERROR};
}

export function edittingService(service) {
    return {type: EDITTING_SERVICE, payload: {service}}
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function fetchServicesSuccess(items) {
    return {type: FETCH_SERVICES_SUCCESS, payload: {items}}
}

export function fetchServicesRequest() {
    return {type: FETCH_SERVICES_REQUEST}
}

export function fetchServicesError() {
    return {type: FETCH_SERVICES_ERROR}
}

export  const fetchServices = (id) => async (dispatch) => {
    id ? dispatch(addServiceRequest()) : dispatch(fetchServicesRequest());
    try {
        const response = id ? await fetch(process.env.REACT_APP_API_URL + `/${id}`) : await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        id ? dispatch(edittingService(data)) : dispatch(fetchServicesSuccess(data));   
    } catch (error) {
        id ? dispatch(addServiceError()) : dispatch(fetchServicesError());
    }
}

export const editService = () => async (dispatch, getState) => {
    const {serviceEdit: {items}} = getState();
    dispatch(addServiceRequest());
    try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(items)
        })
        if(response.status) {
            dispatch(addServiceSuccess(response.status)); 
        }
    } catch(err) {
        dispatch(addServiceError())
    }
}

export const fetchRemove = (id) => async (dispatch) => {
    dispatch(fetchServicesRequest());
    try{
        const response = await fetch(process.env.REACT_APP_API_URL+`/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        });
        if(response.status >= 200 && response.status < 300) {
            dispatch(fetchServices())
        } else {
            let error = new Error(response.statusText);
            throw error;
        } 
    } catch(err) {
        dispatch(fetchServicesError());
    }
}