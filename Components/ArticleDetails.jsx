import { useState, useEffect } from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import { getArticleById } from '../src/utils/api'

export default function ArticleDetails () {
    
    const [currentArticle, setCurrentArticle] = useState([])
    const {article_id}  = useParams()

    console.log(article_id)
    
    useEffect(() => {
        getArticleById(article_id).then(({ article }) => {
            setCurrentArticle(article)
        })
    }, [article_id])

    return (
        <>
            
            <h2>{currentArticle.title}</h2>
            <p>🕓 {currentArticle.created_at}</p>
            <p>By {currentArticle.author}</p>
            <p>Votes: {currentArticle.votes}</p>
            <img src={currentArticle.article_img_url}></img>
            <p>{currentArticle.body}</p>
        </>
    )
}