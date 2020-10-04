import React from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import Link from './Link'

//компонент отвечает за навигацию по сервисам 

function Navigation(props) {
    return (
        <div className='section_navigation'>
            <nav className='nav_bar'>
                <ul className='nav_bar_list'>
                    {props.list.map(item => <li key={nanoid()}>
                        <Link link={item.href} class='nav_bar_link'>{item.name}</Link>
                    </li>)}
                </ul>
            </nav>
            <span className='nav_bar_etc'>...</span>
        </div>
    )
}

Navigation.propTypes = {

}

export default Navigation

