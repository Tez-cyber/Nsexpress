import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar  from '../navbar/Nav'
import Jumbo from '../jumbo/Jumbo'
import About from '../dataSection/About'
import { homeObj } from '../dataSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return ( 
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle} />
        <Jumbo />
        <About {...homeObj} />
    </>
  )
}

export default Home