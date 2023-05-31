import moment from 'moment'

export default function ArticleComments ({currentComments}) {
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