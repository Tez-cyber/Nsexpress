import React from 'react'
import {
    AboutWrapper, AboutContent, AboutDetails,
    AboutHeader, AboutP, AboutSpin, AboutSpinDiv,
    AboutSpin02, AboutMVC, AboutMVCSpan,
    AboutMVCHead,  AboutMVCHeading, AboutMVCContent,
    AboutMissionIcon, AboutVisionIcon, AboutCoreValuesIcon,
    AboutWord, AboutCard, AboutFace1, AboutFace2
} from './AboutElements'


const About = () => {
  return (
    <AboutWrapper id="about">
        <AboutContent>
            <AboutDetails>
                <AboutHeader>
                    About NsExpress
                </AboutHeader>
                <AboutP>
                    NsExpress is presently engaged in the full spectrum
                    of professional brand design and identity. We specialize in
                    making your business standout and offer premium brand management
                    which are tailored to meet client's need
                </AboutP>
            </AboutDetails>
            <AboutSpinDiv>
                <AboutSpin></AboutSpin> <AboutSpin></AboutSpin>
                <AboutSpin></AboutSpin> <AboutSpin></AboutSpin>
                <AboutSpin02></AboutSpin02> <AboutSpin02></AboutSpin02> 
                <AboutSpin02></AboutSpin02> <AboutSpin02></AboutSpin02>
            </AboutSpinDiv>
        </AboutContent>
        <AboutMVC>
            <AboutMVCHeading>
                <AboutMVCSpan></AboutMVCSpan>
                <AboutMVCHead>
                    Mission, Vision And Core Values
                </AboutMVCHead>
            </AboutMVCHeading>
            <AboutMVCContent>
                    <AboutCard>
                        <AboutFace1 className="face1" >
                            <AboutMissionIcon /> 
                            <AboutWord>
                                Mission
                            </AboutWord>
                        </AboutFace1>
                        <AboutFace2 className="face2" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, 
                            architecto maiores labore amet dicta non laboriosam porro 
                            culpa enim exercitationem commodi suscipit. Eveniet, facilis. 
                            Maxime dolores fugit vero. Aliquam vel quos fugiat fugit? Cumque, 
                        </AboutFace2>
                    </AboutCard>
                    <AboutCard className='card'>
                        <AboutFace1 className="face1" >
                            <AboutVisionIcon /> 
                            <AboutWord>
                                Vision
                            </AboutWord>
                        </AboutFace1>
                        <AboutFace2 className="face2" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, 
                            architecto maiores labore amet dicta non laboriosam porro 
                            culpa enim exercitationem commodi suscipit. Eveniet, facilis. 
                            Maxime dolores fugit vero. Aliquam vel quos fugiat fugit? Cumque, 
                        </AboutFace2>
                    </AboutCard>
                    <AboutCard>
                        <AboutFace1 className="face1" >
                            <AboutCoreValuesIcon /> 
                            <AboutWord>
                                Core Values
                            </AboutWord>
                        </AboutFace1>
                        <AboutFace2 className="face2" >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, 
                            architecto maiores labore amet dicta non laboriosam porro 
                            culpa enim exercitationem commodi suscipit. Eveniet, facilis. 
                            Maxime dolores fugit vero. Aliquam vel quos fugiat fugit? Cumque, 
                        </AboutFace2>
                    </AboutCard>
            </AboutMVCContent>
        </AboutMVC>
    </AboutWrapper>
  )
}

export default About