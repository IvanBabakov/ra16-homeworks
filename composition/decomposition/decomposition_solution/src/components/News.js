import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import Link from './Link';
import Block from './Block';

//компонент отвечает за блок текущих новостей и курса валют

function News(props) {
    const allNews = props.allNews;
    return (
        <section className='news-block'>
            <div className='news_tabs'></div>
            <div className='news_panel'>
                {allNews.map(el => 
                    <div key={nanoid()} className={el.name}>
                        {el.content.map(news =>
                        <div key={nanoid()}>
                            <i>
                                {news.icon}
                            </i>
                            <Link link={news.link} class={news.class ? news.class : null}>
                                <p>
                                    {news.text}
                                </p>
                            </Link>
                        </div> 
                        )}  
                    </div>
                )}
            </div>
            <div className='current-exchange'></div>
        </section>
    )
}

News.propTypes = {

}

export default News

