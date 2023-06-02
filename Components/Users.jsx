
import { UserContext } from '../Contexts/userContext'
import { useState, useContext } from 'react'



export default function Users () {

    const { setUser } = useContext(UserContext)

    return (
        <>
            <h2>Users</h2>

            <ul className='article-block'>
                <li>
                    <img style = {{width:200, height:200}} src='https://img.freepik.com/premium-vector/cute-little-jellyfish-cartoon-standing_188253-3505.jpg?w=2000' alt='A cute, blue, cartoon jellyfish with red friendly cheeks, smiling and wiggling its tentacles'></img>
                    <br></br>
                    <h3>jessjelly</h3>
                    <br></br>
                    <button onClick={()=>{
                        setUser({
                            username: "jessjelly",
                            avatar_url: "https://img.freepik.com/premium-vector/cute-little-jellyfish-cartoon-standing_188253-3505.jpg?w=2000"
                        })
                        }}>Select this User</button>
                </li>
                <li>
                    
                    <img style = {{width:200, height:200}} src='https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-tickle.svg?v=5815476939599341761659605031' alt='Mr. Tickle, a cartoon character with long arms for tickling his friends'></img>
                    <br></br>
                    <h3>tickle122</h3>
                    <br></br>
                    <button onClick={()=>{
                        setUser({
                            username: "tickle122",
                            avatar_url: "https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-tickle.svg?v=5815476939599341761659605031"
                        })
                        }}>Select this User</button>
                </li>
                <li>
                    <img style = {{width:200, height:200}} src='https://i.imgflip.com/bgth4.jpg' alt='A grumpy cat, staring miserably with big blue eyes and a long frown'></img>
                    <br></br>
                    <h3>grumpy19</h3>
                    <br></br>
                    <button onClick={()=>{
                        setUser({
                            username: "grumpy19",
                            avatar_url: "https://i.imgflip.com/bgth4.jpg"
                        })
                        }}>Select this User</button>
                </li>
            </ul>
        </>
    )
}
