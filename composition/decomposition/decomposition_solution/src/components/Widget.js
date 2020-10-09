import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

//компонент рендерит виджет (погоды, программы тв и тд)

function Widget(props) {
    return (
        <div>
            {props.title ? <h2>{props.title}</h2> : null}
            <div>
                {props.data ? props.data.map(el => <Link link={el.href} img = {el.img ? el.img : null}>{el.text}</Link>) : 'Ничего нет'}
            </div>
        </div>
    )
}

Widget.propTypes = {

}

export default Widget

