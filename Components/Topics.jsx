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

    console.log(currentTopics)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <main>
            <ul>
                <TopicBlock currentTopics = {currentTopics}/>
            </ul>
        </main>
    )
}