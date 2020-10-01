import React from 'react'

function CardOne(props) {
    return (
        <div className="card" style={props.style}>
            {props.children}
        </div>
    )
}

export default CardOne

