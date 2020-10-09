import React from 'react'
import PropTypes from 'prop-types'

// компонент отвечает за рендер ссылок

function Link(props) {
    return (
            <div>
                {props.img ? <img src={props.img.link} alt={props.img.title}/> : null}
                {props.time ? <span>{props.time}</span> : null}
                <a href={props.link}>{props.children ? props.children : props.name ? props.name : null}</a>
            </div>
    )
}

Link.propTypes = {

}

export default Link

