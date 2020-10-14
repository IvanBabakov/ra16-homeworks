import {createStore, combineReducers, applyMiddleware} from 'redux';
import servicesListReduser from '../reducers/servicesList';
import serviceEditReduser from '../reducers/serviceEdit';
import thunk from 'redux-thunk';

const reduser = combineReducers({
    servicesList: servicesListReduser,
    serviceEdit: serviceEditReduser
})

const store = createStore(reduser, applyMiddleware(thunk));

export default store;