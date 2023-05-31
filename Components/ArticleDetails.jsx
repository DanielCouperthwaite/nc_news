import { useState, useEffect } from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import { getArticleById } from '../src/utils/api'
import moment from 'moment';

export default function ArticleDetails () {
    
    const [currentArticle, setCurrentArticle] = useState([])
    const {article_id}  = useParams()
    
    useEffect(() => {
        getArticleById(article_id).then(({ article }) => {
            setCurrentArticle(article)
        })
    }, [article_id])

    return (
        <>
            
            <h2>{currentArticle.title}</h2>
            {/* <p>🕓 {moment().format(currentArticle.created_at, "DD MM YYYY hh:mm:ss")}</p> */}
            <p>By {currentArticle.author}</p>
            <p>Votes: {currentArticle.votes}</p>
            <img src={currentArticle.article_img_url} alt={currentArticle.title}></img>
            <p>{currentArticle.body}</p>
        </>
    )
}