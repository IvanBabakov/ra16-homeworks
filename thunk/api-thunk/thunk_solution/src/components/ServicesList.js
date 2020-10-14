import React, {useEffect} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {fetchServicesError, fetchServicesRequest, fetchServices, fetchRemove} from '../actions/actionCreators';
import PropTypes from 'prop-types'

function ServicesList({match}) {
    const {items, loading, error}  = useSelector(state => state.servicesList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch])

    const handleRemove = id => {
        dispatch(fetchRemove(id))
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
        <div className='wrapper'>
            <div className='services_list-wrapper'>
                <ul className='services_list'>
                    {items.map(o => 
                        <li className='services_list-item' key={o.id}>
                            <div className="item-text_block">
                                <p>
                                    <span>{o.name}:</span>
                                    <span>{o.price} руб.</span>
                                </p>
                            </div>
                            <div className="item-control_block">
                                <button className='remove-button' onClick={() => handleRemove(o.id)}>X</button>
                                <Link to={`${match.url}/${o.id}`}>
                                    <button className='edit-button'>Edt</button>
                                </Link>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

ServicesList.propTypes = {

}

export default ServicesList;