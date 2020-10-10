import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

//компонент рендерит рекламный банер

function Banner(props) {
    return (
        <div className='section_banner'>
            <Link items={props.data.adverLink}>
                <img src={props.data.image.href} alt={props.data.image.title}/>
            </Link>
        </div>
    )
}

Banner.propTypes = {

}

export default Banner

