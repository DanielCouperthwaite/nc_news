import { Link } from 'react-router-dom'

export default function ({currentTopics}) {

    console.log('inside topic block', currentTopics)

    return (
        <>
        <h2>Topics:</h2>
        <p>Just what you need...</p>
        <ul>
        {currentTopics.map(({slug}) => {
                    return <li key={slug}>
                        <Link to={`/articles`}><h3>{slug}</h3></Link>
                    </li>
                })}
        </ul>
        </>
    )
}