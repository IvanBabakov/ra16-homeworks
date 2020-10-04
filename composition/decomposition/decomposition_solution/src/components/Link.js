import React from 'react'
import PropTypes from 'prop-types'

// компонент отвечает за формирование всех ссылок

function Link(props) {
    return (
            <a href={props.link} className={props.class}>{props.children ? props.children : props.name ? props.name : null}</a>
    )
}

Link.propTypes = {

}

export default Link

