import React, {useEffect} from 'react';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addServiceSuccess, edittingService, editService, fetchServices} from '../actions/actionCreators'
import PropTypes from 'prop-types'

function ServiceEdit({match}) {
    const {items, status, loading, error} = useSelector(state => state.serviceEdit);
    
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchServices(match.params.id))
    }, [dispatch, match.params.id])

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(editService())
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

ServiceEdit.propTypes = {

}

export default ServiceEdit;

