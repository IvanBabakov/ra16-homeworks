import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import News from './News';
import Navigation from './Navigation';
import { nanoid } from 'nanoid';
import Widget from './Widget';
import Banner from './Banner';
import SearchLine from './SearchLine'

//основной компонент

function Main(props) {
    
    return (
        <React.Fragment>
            <div className="wrapper-section">
                <News allNews={props.data.allCurrentNews}/>
            </div>   
            <div className="wrapper-section">
                <Navigation list={props.data.navLinks}/>
            </div>
            <div className="wrapper-section">
                <SearchLine />
            </div>   
            <div className="wrapper-section">
                <Banner content={props.data.banner}/>
            </div>   
            <div className="wrapper-section">
                <Widget allWidgets={props.data.allWidgets}/>
            </div>   
        </React.Fragment>
    )
}

Main.propTypes = {

}

export default Main

