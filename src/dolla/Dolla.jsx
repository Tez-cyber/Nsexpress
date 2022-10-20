import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './dolla.css'
import Home from './components/sections/home/Home'
import Signin from './components/sections/home/Signin'
import Navbar from './components/sections/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar'
import About from './components/pages/about/About'
import Training from './components/pages/training/Training'
import Why from './components/pages/why/Why'
import Footer from './components/sections/footer/Footer'

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
        <Route exact path="/trainings" element={<Training />}/>
        <Route exact path="/why_nsexpress" element={<Why />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default Dolla