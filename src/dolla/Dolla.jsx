import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './dolla.css'
import Home from './components/home/Home'
import Signin from './components/home/Signin'

function Dolla() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />}/>
      </Routes>
    </Router>
  )
}

export default Dolla