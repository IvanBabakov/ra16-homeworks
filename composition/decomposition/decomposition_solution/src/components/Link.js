import React from 'react'
import PropTypes from 'prop-types'

// компонент отвечает за рендер ссылок

function Link(props) {
    return (
            <div>
                {props.items.img ? <img src={props.items.img.href} alt={props.items.img.title}/> : null}
                {props.items.time ? <span>{props.items.time}</span> : null}
                <a href={props.items.href}>{props.children ? props.children : props.items.name ? props.items.name : null}</a>
            </div>
    )
}

Link.propTypes = {

}

export default Link

