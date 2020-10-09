import React from 'react'
import PropTypes from 'prop-types'

//рендерит строку поиска

function SearchLine(props) {
    return (
        <div className='section_search-line'>
            <input type="text"/>
            <button>Искать</button>
        </div>
    )
}

SearchLine.propTypes = {

}

export default SearchLine

