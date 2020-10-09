import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';
import Link from './Link';
import CurrentExchange from './CurrentExchange';


//компонент отвечает за блок текущих новостей и курса валют

function News(props) {
    const allNews = props.allNews;
    
    return (
        <div className='section_news'>
            <div className='news_tabs'>
                {
                    allNews.map(el => <div className='news_tab_wrapper'><Link items={el}/></div>)
                }
            </div>
            <div className='news_panel'>
                <ul>
                    {
                        allNews[0].content.map(el => 
                            <li key={el.id}>
                                <Link items={el}>
                                    <p>{el.text}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
            {props.allNews.currentExchange ? <CurrentExchange dataExchange={props.allNews.currentExchange}/> : null}
        </div>
    )
}

News.propTypes = {

}

export default News

