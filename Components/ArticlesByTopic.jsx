import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticles, getArticlesByTopic } from "../src/utils/api"
import { useState } from "react"
import ArticleBlockByTopic from "./ArticleBlockByTopic"


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
        <ArticleBlockByTopic topic={topic} currentArticles = {currentArticles}/>
        </>
    )
}