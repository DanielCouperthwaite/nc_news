import { Link } from 'react-router-dom'

export default function ({currentTopics}) {

    return (
        <>
        <h2>Topics:</h2>
        
        <ul className="article-block">
        {currentTopics.map(({slug}) => {
                    return (
                    <ul className="topic">
                    <li className="topic li" key={slug}>
                        <Link to={`/articlesByTopic/${slug}`}><h2>{slug}</h2></Link>
                    </li>
                    </ul>
                    )
                })}
        </ul>
        </>
    )
}