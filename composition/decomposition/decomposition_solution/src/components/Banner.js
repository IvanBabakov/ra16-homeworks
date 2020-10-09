import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

//компонент рендерит рекламный банер

function Banner(props) {
    return (
        <div className='section_banner'>
            <Link items={props.content} />
        </div>
    )
}

Banner.propTypes = {

}

export default Banner

