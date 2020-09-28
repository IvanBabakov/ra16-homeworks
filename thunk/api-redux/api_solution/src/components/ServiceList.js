import React, {useEffect} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import ServiceAdd from './ServiceAdd';
import {removeService, edittingService, fetchServicesSuccess} from '../actions/actionCreators';
import PropTypes from 'prop-types'

export  const fetchhendler = async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const services = await response.json();
    dispatch(fetchServicesSuccess(services));
}

function ServiceList({match}) {
    const {items, loading, error}  = useSelector(state => state.serviceList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        fetchhendler(dispatch)
    }, [dispatch])

    const handleRemove = id => {
        dispatch(removeService(id))
    }

    const handleEdit = (name, price, id) => {
        console.log(name, price)
        // dispatch(edittingService(name, price, id));
    }

    return (
        <div>
        <ul>
            {items.map(o => <li key={o.id}>
                {o.name}{o.price}
                <button onClick={() => handleRemove(o.id)}>X</button>
                <Link to={'services/edit'}>
                    <button onClick={() => handleEdit(o.name, o.price, o.id)}>Edit</button>
                </Link>
                </li>)}
        </ul>
        {/* <Route exact path={`${match.url}/edit`} component={ServiceAdd} /> */}
        </div>
    )
}

ServiceList.propTypes = {

}

export default ServiceList