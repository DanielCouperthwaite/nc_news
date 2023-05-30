import { Link } from 'react-router-dom'
import Header from './Header'

export default function Nav () {
    return (
        <nav>
           <h1>Just News</h1>
            <p>No blues, No snooze, No boos... Just News</p>
            <Link to="/">Home   </Link>
            <Link to="/articles">All Articles   </Link>
        </nav>
    )
}