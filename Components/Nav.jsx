import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Contexts/userContext'

export default function Nav () {

    const {user} = useContext(UserContext)

    return (
        <nav>
            <h1>Just News</h1>
            <p>No blues, No snooze, No boos... Just News</p>
            <Link to="/">Home </Link>
            <Link to="/articles">All Articles </Link>
            <Link to="/users">Users </Link>
            <Link to="/topics">Topics </Link>
            <p>Signed in as {user.username}</p>
            <img style={{height:40, width: 40}}src={user.avatar_url}></img>
        </nav>
    )
}