import React from 'react'
import PropTypes from 'prop-types'

//компонент формирует блок пользовательских виджетов (погоды, программы тв и тд)

function Widget(props) {
    return (
        <div >
            <div className="weather-widget"></div>
            <div className="often_visited-widget"></div>
            <div className="map-widget"></div>
            <div className="tv_program-widget"></div>
            <div className="live-widget"></div>
        </div>
    )
}

Widget.propTypes = {

}

export default Widget

