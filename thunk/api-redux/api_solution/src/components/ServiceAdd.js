import React, {useEffect} from 'react';
import {BrowserRouter as Link, Redirect, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addServiceSuccess, edittingService, fetchServicesSuccess} from '../actions/actionCreators'
import PropTypes from 'prop-types'

function ServiceAdd({match}) {
    const {items} = useSelector(state => state.serviceAdd);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchHandler = async () => {
        const response = await fetch(process.env.REACT_APP_API_URL+`/${match.params.id}`);
        const service = await response.json();
        dispatch(edittingService(service));
        console.log(service)
        }
        fetchHandler()
    }, [])

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const itemsWithId = {...items, id: match.params.id}
        console.log(JSON.stringify(items));
        try {
            await fetch(process.env.REACT_APP_API_URL, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(items)
            })
        } catch(err) {
            console.log(err)
        }
        // fetchServicesSuccess(dispatch);
        dispatch(addServiceSuccess());
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='item-form'>
                    Название
                    <input name='name' onChange={handleChange} value={items.name}/>
                </label>
                <label className='item-form'>
                    Стоимость
                    <input name='price' onChange={handleChange} value={items.price}/>
                </label>
                <label className='item-form'>
                    Описание
                    <input name='content' onChange={handleChange} value={items.content}/>
                </label>
                <button type='submit'>Save</button>    
            </form>
            <NavLink exact to='/services'><button>Cancel</button></NavLink>
        </div> 
    )
}

ServiceAdd.propTypes = {

}

export default ServiceAdd

