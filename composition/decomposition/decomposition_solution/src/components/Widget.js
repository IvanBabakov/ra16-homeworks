import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

//компонент рендерит виджет (погоды, программы тв и тд)

function Widget(props) {
    return (
        <div>
            {props.data.name ? <h2>{props.data.name}</h2> : null}
            <div>
                {props.data.content ? props.data.content.map(el => <Link items={el} />) : 'Ничего нет'}
            </div>
        </div>
    )
}

Widget.propTypes = {

}

export default Widget

