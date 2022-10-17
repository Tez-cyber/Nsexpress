import React from 'react'
import Jumbo from '../jumbo/Jumbo'
import QuickInfo from '../dataSection/QuickInfo'
import { objOne, objTwo, objThree } from '../dataSection/Data'
import Services from '../services/Services'

const Home = () => {
    
  return ( 
    <>
        <Jumbo />
        <QuickInfo {...objOne} />
        <QuickInfo {...objTwo} />
        <Services />
        <QuickInfo {...objThree} />
    </>
  ) 
}

export default Home