import React from 'react'
import Fade from 'react-reveal/Fade'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServiceElements'

import Icon1 from '../../../assets/images/svg-1.svg'
import Icon2 from '../../../assets/images/svg-1.svg'
import Icon3 from '../../../assets/images/svg-1.svg'



const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <Fade left cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Digital Marketing</ServicesH2>
                    <ServicesP>
                        We will help bring a new stream of clients 
                        with modern strategies in the digital world
                    </ServicesP>
                </ServicesCard>
            </Fade>
            <Fade up cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>UI/UX</ServicesH2>
                    <ServicesP>
                        Helping you create a human centric user interface
                        for your proposed project
                    </ServicesP>
                </ServicesCard>
            </Fade>
            <Fade right cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>eCommerce Solution</ServicesH2>
                    <ServicesP>
                        Our team of developers will hold nothing
                        back in giving the best to keep customers coming
                    </ServicesP>
                </ServicesCard>
            </Fade>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services