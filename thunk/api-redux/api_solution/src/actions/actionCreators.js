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
