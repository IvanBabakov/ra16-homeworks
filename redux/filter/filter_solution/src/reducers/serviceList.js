import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICES} from '../actions/actionTypes'

const initialState = {
    items: [
        {id: nanoid(), name: 'Замена стекла', price: 21000},
        {id: nanoid(), name: 'Замена дисплея', price: 25000}
    ],
    itemsFiltered: []
};

export default function serviceListReducer(state = initialState, action) {
    switch(action.type) {
        case FILTER_SERVICES:  //который фильтрует state по текущей string и возвращает новый массив не меняя state!
            const {string} = action.payload;
                if(string.length > 0) {
                    const reg = new RegExp(`${string}`);
                    const itemsNew = state.items.filter(service => reg.test(service.name));
                    return {...state, itemsFiltered: [...itemsNew]}
                } else {
                    return {...state, itemsFiltered: []}
                }
        case ADD_SERVICE: 
            const {name, price, changedId} = action.payload;
            if(changedId) {
                if(state.itemsFiltered.length > 0) {
                    const listItemsUpdated = [...state.items.filter(service => service.id !== changedId), {id: nanoid(), name, price: Number(price)}];
                    const listFilteredUpdated = [...state.itemsFiltered.filter(service => service.id !== changedId), {id: nanoid(), name, price: Number(price)}];
                    return {...state, items:[...listItemsUpdated], itemsFiltered:[...listFilteredUpdated]}
                } else {
                    return {...state, items:[...state.items.filter(service => service.id !== changedId), {id: nanoid(), name, price: Number(price)}]};
                }
            } else {
                return {...state, items:[...state.items, {id: nanoid(), name, price: Number(price)}]};
            }
        case REMOVE_SERVICE: 
            const {id} = action.payload;
            if(state.itemsFiltered.length > 0) {
                state.items = [...state.items.filter(service => service.id !== id)]
                return {...state, itemsFiltered:[...state.itemsFiltered.filter(service => service.id !== id)]};
            }

            return {...state, items:[...state.items.filter(service => service.id !== id)]};
        default:
            return state;
    }
}

