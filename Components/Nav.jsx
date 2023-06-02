import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Contexts/userContext'

export default function Nav () {

    const {user} = useContext(UserContext)

    return (
        <>
            <h1>Just News</h1>
            <p style={{fontStyle:'italic', fontSize:20}}>Award winning writing, all in one place</p>
            <nav>
            <Link className='nav-selector' to="/">Home   </Link>
            <Link className='nav-selector' to="/articles">All Articles   </Link>
            <Link className='nav-selector' to="/topics">Topics   </Link>
            <Link className='nav-selector' to="/users">Users   </Link>
            
            </nav>
            <p className='others'>Signed in as {user.username}</p>
            <img style={{height:40, width: 40}}src={user.avatar_url}></img>
        
        </>
    )
}