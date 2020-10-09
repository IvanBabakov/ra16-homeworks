import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import News from './News';
import Navigation from './Navigation';
import Widget from './Widget';
import Banner from './Banner';
import SearchLine from './SearchLine'

//основной компонент

function Main(props) {
    
    return (
        <React.Fragment>
            <div className="wrapper-section_news">
                <News allNews={props.data.allCurrentNews}/>
            </div>   
            <div className="wrapper-section_navigation">
                <Navigation list={props.data.navLinks}/>
            </div>
            <div className="wrapper-section_search-line">
                <SearchLine />
            </div>   
            <div className="wrapper-section_banner">
                <Banner content={props.data.banner}/>
            </div>   
            <div className="wrapper-section_widget">
                {props.data.allWidgets.map(widget => <Widget title={widget.name} data={widget.content}/>)}
            </div>   
        </React.Fragment>
    )
}

Main.propTypes = {

}

export default Main

