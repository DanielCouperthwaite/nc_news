import { useState, useEffect } from "react";
import { getArticles } from "../src/utils/api";

export default function ArticlesList () {
    const [currentArticles, setCurrentArticles] =useState([])

    useEffect(() => {
        getArticles().then(( articles ) => {
            setCurrentArticles(articles)
        })
    }, [])

    return (
        <main>
            <ul>
                {currentArticles.map(({article_id, title, author, article_img_url}) => {
                    return <li key={article_id}>
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <img src={article_img_url} alt={title}></img>
                    </li>
                })}
            </ul>
        </main>
    )
}