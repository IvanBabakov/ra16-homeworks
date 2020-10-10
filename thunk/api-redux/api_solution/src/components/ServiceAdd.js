import React, {useEffect} from 'react';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addServiceSuccess, edittingService} from '../actions/actionCreators'
import PropTypes from 'prop-types'

function ServiceAdd({match}) {
    const {items, status} = useSelector(state => state.serviceAdd);
    
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        try{
            const fetchHandler = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL+`/${match.params.id}`);
            const service = await response.json();
            dispatch(edittingService(service));
            }
            fetchHandler();
        } catch(err) {
            console.log(err);
        }
    }, [])

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            console.log(err);

        }
    }

    const handleCancel = () => {
        dispatch(edittingService());
        history.goBack();
    }

    if(status === 204) {
        history.goBack();
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
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

ServiceAdd.propTypes = {

}

export default ServiceAdd

