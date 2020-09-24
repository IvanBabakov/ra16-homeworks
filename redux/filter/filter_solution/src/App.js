import React, { Fragment } from 'react';
import './App.css';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

function App() {
  return (
    <div className='main-wrapper'>
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
