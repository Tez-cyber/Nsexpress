import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './dolla.css'
import Home from './components/home/Home'

function Dolla() {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default Dolla