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

import Icon1 from '../../assets/images/svg-1.svg'
import Icon2 from '../../assets/images/svg-1.svg'
import Icon3 from '../../assets/images/svg-1.svg'

 

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <Fade left cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your
                        overall revenue
                    </ServicesP>
                </ServicesCard>
            </Fade>
            <Fade up cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        You can access our platform anywhere in the world
                    </ServicesP>
                </ServicesCard>
            </Fade>
            <Fade right cascade>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        Unlock our special membership card that returns 
                        5% cash back
                    </ServicesP>
                </ServicesCard>
            </Fade>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services