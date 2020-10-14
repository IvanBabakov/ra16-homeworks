import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServicesList';

function App() {
  return (
    <Router>
      <Redirect from='/' to='/services'/>
      <Route exact path='/services' component={ServiceList}/>
      <Route exact path='/services/:id' component={ServiceEdit} />
    </Router>
  );
}

export default App;