import React from 'react'
import style from './News.module.css'

export const News = (props) => {
    return (
        <div className={style.news}>
            {props.newsArray ? (
                <div>
                    <h2>{props.newsArray.title}</h2>
                    <img src={props.newsArray.image} alt="news" />
                    <div className={style.newsDesc}>
                        {props.newsArray.content}
                    </div>
                </div>
            ) : (
                'downloading'
            )}
        </div>
    )
}
