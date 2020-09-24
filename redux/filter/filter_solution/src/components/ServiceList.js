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
        dispatch(filterServices(value))
    }

    return (
        <div className='section services-block'>
            <span className='lable-input'>Filter</span>
            <input name='filter' type="text" onChange={handleFilter}/>
            <ul className='services-list'>
            {(itemsFiltered.length > 0 ? itemsFiltered : items).map(o => <li className='list-item' key={o.id}>
                <span className='list-item-el'>
                    {o.name}
                </span>
                <span className='list-item-el'>
                    {o.price}
                </span>
                <button className='list-item-el' onClick={() => handleRemove(o.id)}>X</button>
                <button className='list-item-el' onClick={() => handleEdit(o.name, o.price, o.id)}>Edit</button>
                </li>)}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {

}

export default ServiceList

