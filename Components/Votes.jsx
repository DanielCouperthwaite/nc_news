import { patchDownVote, patchHeartVote, patchUpVote } from "../src/utils/api";
import { useState } from "react";


export default function Votes ({currentArticle}) {
   
    const [currentVotes, setCurrentVotes] = useState(0);
    const [disabled, setDisabled] = useState(false)
    
    function handleUpvote () {
        setDisabled(true)
        setCurrentVotes((currentVotes) => currentVotes + 1)
        patchUpVote(currentArticle.article_id).then((data) => {
            return data
        })
    }

    function handleDownvote () {
        setDisabled(true)
        setCurrentVotes((currentVotes) => currentVotes - 1)
        patchDownVote(currentArticle.article_id).then((data) => {
            return data
        })
    }

    function handleHeartvote () {
        setDisabled(true)
        setCurrentVotes((currentVotes) => currentVotes + 1000)
        patchHeartVote(currentArticle.article_id).then((data) => {
            return data
        })
    }

   return (
        <>
            <p>Votes: {currentArticle.votes + currentVotes}</p>
            <button onClick={handleUpvote} disabled = {disabled}>
                👍
            </button>
            <button onClick={handleDownvote} disabled = {disabled}>
                👎
            </button>
            <button onClick={handleHeartvote} disabled = {disabled}>
                💗
            </button>
        </>
   )
    
}