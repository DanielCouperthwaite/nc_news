export default function ArticleComments ({currentComments}) {
    return (
        <>
             {currentComments.map(({body, author, votes, comment_id}) => {
                    return <li key={comment_id}>
                        <p>{body}</p>
                        <p>Submitted by {author}, votes: {votes}</p>
                    </li>
                })}
        </>
    )
}