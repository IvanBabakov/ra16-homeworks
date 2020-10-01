import React from 'react'

function CardTwo(props) {
    return (
        <div className="card" style={props.style}>
            {props.children}
        </div>
    )
}

export default CardTwo

