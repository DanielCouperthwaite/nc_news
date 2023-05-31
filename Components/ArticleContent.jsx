export default function ArticleContent ({currentArticle}) {
    return (
        <>
            
            <h2>{currentArticle.title}</h2>
            {/* <p>🕓 {moment().format(currentArticle.created_at, "DD MM YYYY hh:mm:ss")}</p> */}
            <p>By {currentArticle.author}</p>
            <p>Votes: {currentArticle.votes}</p>
            <img src={currentArticle.article_img_url} alt={currentArticle.title}></img>
            <p>{currentArticle.body}</p>
        </>
    )
}