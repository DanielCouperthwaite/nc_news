import moment from 'moment'
import { useState } from 'react';
import { patchUpVote } from '../src/utils/api';
import Votes from './Votes';

export default function ArticleContent ({currentArticle}) {

    return (
        <>
        
            <h2>{currentArticle.title}</h2>
            <Votes currentArticle = {currentArticle}/>
            <h3>🕓 {moment(`${currentArticle.created_at}`).format(`Do MMMM YYYY`)}{` `} </h3>
            <p>By {currentArticle.author}</p>
            <img style={{height:300, width: 300}} src={currentArticle.article_img_url} alt={currentArticle.title}></img>
            <p className='article-content'>{currentArticle.body}</p>
        </>
    )
}