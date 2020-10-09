import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

//компонент рендерит рекламный банер

function Banner(props) {
    return (
        <div className='section_banner'>
            <Link link={props.content.href}>
                {props.content.img ? <img src={props.content.img.href} alt={props.content.img.title}/> : null}
            </Link>
        </div>
    )
}

Banner.propTypes = {

}

export default Banner

