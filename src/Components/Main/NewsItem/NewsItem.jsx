import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NewsItem.module.css'

export const NewsItem = (props) => {
    return (
        <div className={style.newsItem}>
            <NavLink to={'/' + props.id}>
                <h2>{props.title}</h2>
                <img src={props.img} alt="news" />
                <div className={style.desc}>{props.desc}</div>
            </NavLink>
        </div>
    )
}
