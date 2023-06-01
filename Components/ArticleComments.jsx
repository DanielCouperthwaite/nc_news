import moment from 'moment'
import { useState, useEffect } from 'react'
import { getCommentsById } from '../src/utils/api'


export default function ArticleComments ({currentComments, setCurrentComments, article_id}) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCommentsById(article_id).then(( comments ) => {
            
            if(comments.length === 0){
                setCurrentComments('No Comments Yet')
                setIsLoading(false)
            }
            else {setCurrentComments(comments)
                setIsLoading(false)
            }
        })
    }, [article_id])

    

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
             {currentComments.map(({body, author, votes, comment_id, created_at}) => {
                    return <li key={comment_id}>
                        <p>{body}</p>
                        <p>Submitted by {author} on {moment(`${created_at}`).format(`Do MMMM YYYY`)}{` `},  votes: {votes}</p>
                    </li>
                })}
        </>
    )
}