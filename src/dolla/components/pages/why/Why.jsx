import React from 'react'
import { 
    WhyWrapper, WhyContainer, WhyFirstElement,
    WhySecondElement, WhyHead, WhyFirstDiv, 
    WhySecondDiv, WhyCard, WhyIcon, WhyH2,
    WhyP
} from './WhyElements'
import Fade from "react-reveal/Fade"

const Why = () => {
  return (
    <WhyWrapper>
        <WhyContainer>
            <WhyFirstElement>
                <WhyHead>Why Choose Us ?</WhyHead>
                <WhyFirstDiv>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis 
                    dignissimos quidem aperiam, aut a numquam ipsa ut fugit? Dolor 
                    aliquam repellendus omnis neque velit quisquam pariatur illum. 
                    Hic, dolorem atque. Itaque eum sint explicabo dolores dolor ipsam 
                    tempora deleniti neque fuga consequatur rerum qui incidunt eaque nostrum 
                    
                </WhyFirstDiv>
                <WhySecondDiv>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis 
                    dignissimos quidem aperiam, aut a numquam ipsa ut fugit? Dolor 
                    aliquam repellendus omnis neque velit quisquam pariatur illum. 
                    Hic, dolorem atque. Itaque eum sint explicabo dolores dolor ipsam 
                    tempora deleniti neque fuga consequatur rerum qui incidunt eaque nostrum 
                    
                </WhySecondDiv>
            </WhyFirstElement>
            <WhySecondElement>
                <Fade right cascade>
                    <WhyCard>
                        <WhyIcon />
                        <WhyH2>Technology</WhyH2>
                        <WhyP>
                            Being an epicenter of technology, we strive to provide
                            best digitals solutions available
                        </WhyP>
                    </WhyCard>
                </Fade>
                <Fade down cascade>
                    <WhyCard>
                        <WhyIcon />
                        <WhyH2>Experience</WhyH2>
                        <WhyP>
                            With vast experience, be rest assured your projects
                            are handled by professionals
                        </WhyP>
                    </WhyCard>
                </Fade>
                <Fade left cascade>
                    <WhyCard>
                        <WhyIcon />
                        <WhyH2>Professionalism</WhyH2>
                        <WhyP>
                            Ensuring the best of results, has earned us respect 
                            from our clients
                        </WhyP>
                    </WhyCard>
                </Fade>
            </WhySecondElement>
        </WhyContainer>
    </WhyWrapper>
  )
}

export default Why