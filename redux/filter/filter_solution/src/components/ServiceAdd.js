import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, edittingService} from '../actions/actionCreators'
import PropTypes from 'prop-types'

function ServiceAdd(props) {
    const items = useSelector(state => state.serviceAdd);
    
    const dispatch = useDispatch();

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(items.id) {
            dispatch(addService(items.name, items.price, items.id))    
        } else {
            dispatch(addService(items.name, items.price));    
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
        dispatch(edittingService())
    }

    return (
        <div className='section'>
            <form onSubmit={handleSubmit}>
                <input className='form-block' name='name' onChange={handleChange} value={items.name}/>
                <input className='form-block' name='price' onChange={handleChange} value={items.price}/>
                <button className='form-block' type='submit'>Save</button>
                <button className='cancel-button' hidden={!items.id} onClick={handleCancel}>Cancel</button>
            </form>   
        </div>
        
    )
}

ServiceAdd.propTypes = {

}

export default ServiceAdd

