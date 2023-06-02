import { useState, useEffect } from "react";
import { getArticles } from "../src/utils/api";
import ArticleBlock from "./ArticleBlock";

export default function ArticlesList () {
    const [currentArticles, setCurrentArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles().then(( articles ) => {
            setCurrentArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <main>
            <ul className="article-block">
                <ArticleBlock currentArticles = {currentArticles}/>
            </ul>
        </main>
    )
}