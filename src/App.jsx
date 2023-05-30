import { useState } from 'react'
import './App.css'

import Nav from '../Components/Nav'
import ArticlesList from '../Components/ArticlesList'
import Home from '../Components/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}


export default App
