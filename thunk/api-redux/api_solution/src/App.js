import React, { Fragment } from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <Router>
      <Redirect from='/' to='/services'/>
      <Route exact path='/services' component={ServiceList}/>
      <Route exact path='/services/edit' component={ServiceAdd} />
        {/* <ServiceAdd /> */}
        {/* <ServiceList /> */}
    </Router>
  );
}

export default App;