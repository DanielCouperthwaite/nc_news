import { useState } from "react"
import { postComment } from "../src/utils/api"
import { UserContext } from "../Contexts/userContext"
import { useContext } from "react"


export default function NewCommentForm ({setCurrentComments, article_id, user}) {

    const [newComment, setNewComment] = useState([])
    const [guestError, setGuestError] = useState(false)
    

    function handleSubmit (event) {
        event.preventDefault()

        if(user.username === 'guest'){
            setGuestError(true)
        } else {

        postComment(newComment, article_id, user.username)
        .then((newCommentFromApi) => {
        
        setNewComment('')
        
        setCurrentComments((currComments) => {
            return [newCommentFromApi, ...currComments]
        })
            
    })
    }
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newComment">Have Your Say:</label>
                <br/>
                <textarea
                placeholder="Insert comment here..."
                id="newComment"
                multiline="true"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                ></textarea>
                <br/>
                <button disabled={!newComment}>Add Comment</button>
                <p>{ guestError === false ? '' : 'Cannot post a comment as guest. Please sign in!' }</p>
            </form>
        </>
    )
}
