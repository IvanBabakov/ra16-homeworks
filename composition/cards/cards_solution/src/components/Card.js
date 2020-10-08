import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div className="card" style={props.style}>
            <div className="card-body">
                <h5 className="card-title">{props.title ? props.title : null}</h5>
                {props.children}
                {props.text ? <p className="card-text">{props.text}</p> : null}
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Card

