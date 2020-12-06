import React from 'react'
import { NewsItem } from './NewsItem/NewsItem'
import style from './Main.module.css'

export const Main = (props) => {
    const renderItem = props.newsArray.map((i, index) => {
        return (
            <NewsItem
                key={index}
                title={i.title}
                img={i.urlToImage}
                desc={i.description}
                id={index}
            />
        )
    })
    return <div className={style.main}>{renderItem}</div>
}
