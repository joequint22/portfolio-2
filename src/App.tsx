import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {

  
  return (
    <>
        <div className="App ">
          <Navbar />
          <Home />
          <About />
          <Portfolio />

          <SocialLinks />
        </div>
    </>
  )
}

export default App
