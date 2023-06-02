import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticles, getArticlesByTopic } from "../src/utils/api"
import { useState } from "react"
import ArticleBlock from "./ArticleBlock"


export default function ArticlesByTopic () {
    
    const [currentArticles, setCurrentArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const {topic} = useParams()

    
    
    useEffect(() => {
        getArticlesByTopic(topic).then(( articles ) => {
            setCurrentArticles(articles)
            setIsLoading(false)
        })
    }, [])
    
    
    if(isLoading) {
        return <h2>Loading...</h2>
    }

    

    return (
        <>
            <h3>This week's featured articles on {topic} ...Just when you need them</h3>
            <ul className="article-block">
                <ArticleBlock topic={topic} currentArticles = {currentArticles}/>
            </ul>
        </>
    )
}