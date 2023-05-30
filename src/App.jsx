import { useState } from 'react'
import './App.css'

import Nav from '../Components/Nav'
import ArticlesList from '../Components/ArticlesList'
import Home from '../Components/Home'
import ArticleDetails from '../Components/ArticleDetails'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticleDetails />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}


export default App
