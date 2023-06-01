import { patchDownVote, patchHeartUpVote, patchUpVote, patchHeartDownVote } from "../src/utils/api";
import { useState } from "react";


export default function Votes ({currentArticle}) {
   
    const [currentVotes, setCurrentVotes] = useState(0);
    const [upClicked, setUpClicked] = useState(false)
    const [downClicked, setDownClicked] = useState(false)
    const [heartClicked, setHeartClicked] = useState(false)
    
    function handleUpvote () {
        if(upClicked === false) {
            setUpClicked(true)
            setCurrentVotes((currentVotes) => currentVotes + 1)
            patchUpVote(currentArticle.article_id).then((data) => {
            return data
        })
        } else {
            setUpClicked(false)
            setCurrentVotes((currentVotes) => currentVotes - 1)
            patchDownVote(currentArticle.article_id).then((data) => {
                return data
            })
        }
        
    }

    function handleDownvote () {
        if(downClicked === false) {
            setDownClicked(true)
            setCurrentVotes((currentVotes) => currentVotes - 1)
            patchDownVote(currentArticle.article_id).then((data) => {
            return data
        })
        } else {
            setDownClicked(false)
            setCurrentVotes((currentVotes) => currentVotes + 1)
            patchUpVote(currentArticle.article_id).then((data) => {
                return data
            })
        }
    }

    function handleHeartvote () {
        if(heartClicked === false) {
            setHeartClicked(true)
            setCurrentVotes((currentVotes) => currentVotes + 1000)
            patchHeartUpVote(currentArticle.article_id).then((data) => {
                return data
            })
        } else {
            setHeartClicked(false)
            setCurrentVotes((currentVotes) => currentVotes - 1000)
            patchHeartDownVote(currentArticle.article_id).then((data) => {
                return data
        })
    }

    }

   return (
        <>
            <p>Votes: {currentArticle.votes + currentVotes}</p>
            <button onClick={handleUpvote} >
                { upClicked === false ? '👍' : 'Liked!' }
            </button>
            <button onClick={handleDownvote} >
                { downClicked === false ? '👎' : 'Disliked' }
            </button>
            <button onClick={handleHeartvote} >
                { heartClicked === false ? '💗' : 'Loved!' }
            </button>
        </>
   )
    
}