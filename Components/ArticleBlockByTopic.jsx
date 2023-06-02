import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ({currentArticles}) {
    
    console.log('insideArticleBlockByTopic', currentArticles)

    return (
        <>
        
        {currentArticles.map(({article_id, title, author, article_img_url}) => {

                    return <li key={article_id}>
                        <Link to={`/articles/${article_id}`}><h2>{title}</h2></Link>
                        <p>{author}</p>
                        <Link to={`/articles/${article_id}`}><img src={article_img_url} alt={title}></img></Link>
                    </li>
                })}

        </>
    )
}