import moment from 'moment'

export default function ArticleContent ({currentArticle}) {
    return (
        <>
            
            <h2>{currentArticle.title}</h2>
            <h3>🕓 {moment(`${currentArticle.created_at}`).format(`Do MMMM YYYY`)}{` `} </h3>
            <p>By {currentArticle.author}</p>
            <p>Votes: {currentArticle.votes}</p>
            <img src={currentArticle.article_img_url} alt={currentArticle.title}></img>
            <p>{currentArticle.body}</p>
        </>
    )
}