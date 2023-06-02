import { useState } from 'react'
import './App.css'

import Nav from '../Components/Nav'
import ArticlesList from '../Components/ArticlesList'
import Home from '../Components/Home'
import ArticleDetails from '../Components/ArticleDetails'
import Users from '../Components/Users'
import Topics from '../Components/Topics'
import { UserContext } from '../Contexts/userContext'
import ArticlesByTopic from '../Components/ArticlesByTopic'

import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  
  const [user, setUser] = useState({
    username: "guest",
    avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNBe5CMnw0EyOx4YEVKphGQD6iWyaqlo9vg&usqp=CAU"
  })


  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticleDetails user={user}/>} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articlesByTopic/:topic" element={<ArticlesByTopic />} />
      
      </Routes>
    </>
    </UserContext.Provider>
    </BrowserRouter>
  )
}


export default App
