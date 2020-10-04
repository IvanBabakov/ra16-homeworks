import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import Link from './Link';
import Block from './Block';

//компонент отвечает за блок текущих новостей и курса валют

function News(props) {
    const allNews = props.allNews;
    const handleClick = () => {

    }
    return (
        <section className='news-block'>
            <div className='news_tabs'>
                {
                    allNews.map(el => <button className='news_tab' onClick={handleClick}>{el.name}</button>)
                }
            </div>
            <div className='news_panel'>
                {
                    
                }
            </div>
            <div className='current-exchange'></div>
        </section>
    )
}

News.propTypes = {

}

export default News

