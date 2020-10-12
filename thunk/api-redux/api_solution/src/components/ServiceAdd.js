import React, {useEffect} from 'react';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addServiceSuccess, edittingService, addServiceError, addServiceRequest} from '../actions/actionCreators'
import PropTypes from 'prop-types'

function ServiceAdd({match}) {
    const {items, status, loading, error} = useSelector(state => state.serviceAdd);
    
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        try{
            const fetchHandler = async () => {
                dispatch(addServiceRequest())
                const response = await fetch(process.env.REACT_APP_API_URL+`/${match.params.id}`);
                if(response.status >= 200 && response.status < 300) {
                    const service = await response.json();
                    dispatch(edittingService(service));
                } else {
                    const err = new Error (response.statusText);
                    throw err;
                }
            }
            fetchHandler();
        } catch(err) {
            console.log(err)
            dispatch(addServiceError())
        }
    }, [])

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(addServiceRequest());
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

    const handleCancel = (event) => {
        event.preventDefault();
        dispatch(edittingService());
        history.goBack();
    }

    if(status >= 200 && status < 300) {
        history.goBack();
        dispatch(addServiceSuccess(null))
    }

    if(loading) {
        return  <div className='loadding'>
                    <div className="spinner-wrapper">
                        <div className='spinner'></div>
                    </div>
                </div>
    }

    if(error) {
        return  <div className='error'>
                    <div className="error-wrapper">
                        <h1 className='error-text'>Произошла ошибка!</h1>
                    </div>
                </div>
    }

    return (
        <div className="wrapper">
            <div className='editting_form-wrapper'>
                <form className='editting_form' onSubmit={handleSubmit}>
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
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

ServiceAdd.propTypes = {

}

export default ServiceAdd

