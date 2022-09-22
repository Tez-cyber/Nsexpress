import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './dolla.css'
import Home from './components/home/Home'
import Signin from './components/home/Signin'
import Navbar from './components/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar'
import About from './components/about/About'

function Dolla() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<Signin />}/>
      </Routes>
    </Router>
  )
}

export default Dolla