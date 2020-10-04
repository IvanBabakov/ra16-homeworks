import React from 'react'
import PropTypes from 'prop-types'

function Block(props) {
    return (
        <div key={props.key} className={props.class}>
            {props.children}
        </div>
    )
}

Block.propTypes = {

}

export default Block

