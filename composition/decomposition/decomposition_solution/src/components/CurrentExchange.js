import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

//компонент рендерит текущий курс валют

function CurrentExchange(props) {
    return (
        <div className='current-exchange'>
            {props.dataExchange.map(el => 
                <div>    
                    <Link link={el.href}>
                        {el.name ? el.name : null}
                    </Link>
                    {el.currValue ? <span>{el.currValue}</span> : null}
                    {el.currChange ? <span>{el.currChange}</span> : null}
                </div>
            )}
        </div>
    )
}

CurrentExchange.propTypes = {

}

export default CurrentExchange

