import { getTopics } from "../src/utils/api"
import TopicBlock from "./TopicBlock"
import { useState, useEffect } from "react"

export default function Topics () {
    const [currentTopics, setCurrentTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getTopics().then(( topics ) => {
            setCurrentTopics(topics)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <main>
        
                <TopicBlock currentTopics = {currentTopics}/>
            
        </main>
    )
}