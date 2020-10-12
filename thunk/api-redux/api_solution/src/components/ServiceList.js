import React, {useEffect} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {fetchServicesError, fetchServicesRequest, fetchServicesSuccess} from '../actions/actionCreators';
import PropTypes from 'prop-types'

export  const fetchhendler = async (dispatch) => {
    try {
        dispatch(fetchServicesRequest());
        const response = await fetch(process.env.REACT_APP_API_URL);
        const services = await response.json();
        dispatch(fetchServicesSuccess(services));   
    } catch (error) {
        dispatch(fetchServicesError());
    }
}

function ServiceList({match}) {
    const {items, loading, error}  = useSelector(state => state.serviceList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        fetchhendler(dispatch)
    }, [dispatch])

    const handleRemove = id => {
        try{
            const fetchRemove = async (id) => {
                dispatch(fetchServicesRequest());
                const response = await fetch(process.env.REACT_APP_API_URL+`/${id}`,{
                    method: 'DELETE',
                    headers: {'Content-Type' : 'application/json'}
                });
                if(response.status >= 200 && response.status < 300) {
                    fetchhendler(dispatch)
                } else {
                    let error = new Error(response.statusText);
                    throw error;
                } 
            }
            fetchRemove(id);
        } catch(err) {
            console.log(err)
            dispatch(fetchServicesError());
        }
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

ServiceList.propTypes = {

}

export default ServiceList