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
        dispatch(fetchServicesError())
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
                const response = await fetch(process.env.REACT_APP_API_URL+`/${id}`,{
                    method: 'DELETE',
                    headers: {'Content-Type' : 'application/json'}
                });
                if(response.status === 204) {
                    fetchhendler(dispatch)
                }
            }
            fetchRemove(id);
        } catch(err) {
            console.log(err)
        }
    }

    if(loading) {
        return <div><h1>Loadding...</h1></div>
    }

    if(error) {
        return <div><h1>Ошибка</h1></div>
    }

    return (
        <div>
            <ul>
                {items.map(o => 
                    <li key={o.id}>
                        {o.name}{o.price}
                        <button onClick={() => handleRemove(o.id)}>X</button>
                        <Link to={`${match.url}/${o.id}`}>
                            <button>Edit</button>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {

}

export default ServiceList