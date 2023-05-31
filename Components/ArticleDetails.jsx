import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById, getCommentsById } from '../src/utils/api'
import moment from 'moment';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';


export default function ArticleDetails () {
    
    const [currentArticle, setCurrentArticle] = useState([])
    const [currentComments, setCurrentComments] = useState([])
    const {article_id}  = useParams()
    
    useEffect(() => {
        getArticleById(article_id).then(({ article }) => {
            setCurrentArticle(article)
        })
    }, [article_id])

    return (
        <>
            <ArticleContent currentArticle = {currentArticle}/>
            <ArticleComments article_id = {article_id} currentComments = {currentComments} setCurrentComments = {setCurrentComments} />
        </>
    )

}