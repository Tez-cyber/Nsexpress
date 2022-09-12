import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar  from '../navbar/Nav'
import Jumbo from '../jumbo/Jumbo'
import QuickInfo from '../dataSection/QuickInfo'
import { objOne, objTwo, objThree } from '../dataSection/Data'
import Services from '../services/Services'
import Footer from '../footer/Footer'

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
        <QuickInfo {...objOne} />
        <QuickInfo {...objTwo} />
        <Services />
        <QuickInfo {...objThree} />
        <Footer />
    </>
  )
}

export default Home