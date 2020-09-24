import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {removeService, edittingService, filterServices} from '../actions/actionCreators';
import PropTypes from 'prop-types'

function ServiceList(props) {
    const {items, itemsFiltered}  = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeService(id))
    }

    const handleEdit = (name, price, id) => {
        console.log(name, price)
        dispatch(edittingService(name, price, id));
    }

    const handleFilter = (event) => {
        const {value} = event.target;
        console.log(value, value.length)
        dispatch(filterServices(value))
        
        // написать action FILTER_SERVICES
        // из input диспатчить текст в state.string
    }
    console.log(itemsFiltered);

    return (
        <div>
            <input name='filter' type="text" onChange={handleFilter}/>
            <ul>
            {(itemsFiltered.length > 0 ? itemsFiltered : items).map(o => <li key={o.id}>
                {o.name}{o.price}
                <button onClick={() => handleRemove(o.id)}>X</button>
                <button onClick={() => handleEdit(o.name, o.price, o.id)}>Edit</button>
                </li>)}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {

}

export default ServiceList

