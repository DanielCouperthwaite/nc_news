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
            console.log('articles gotten by topic', articles)
            setCurrentArticles(articles)
            setIsLoading(false)
        })
    }, [])
    
    
    

    return (
        <>
        <p>This week's featured articles on {topic} ...Just when you need them</p>
        <p><ArticleBlockByTopic topic={topic} currentArticles = {currentArticles}/></p>
        </>
    )
}