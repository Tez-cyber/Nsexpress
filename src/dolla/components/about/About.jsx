import React from 'react'
import {
    AboutWrapper, AboutContent, AboutDetails,
    AboutHeader, AboutP, AboutSpin, AboutSpinDiv,
    AboutSpin02, AboutMVC, AboutMVCSpan,
    AboutMVCHead, AboutMVCContent, AboutMission,
    AboutVision, AboutCoreValues, AboutMVCHeading
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
                    <AboutMission>
                        
                    </AboutMission>
                    <AboutVision>

                    </AboutVision>
                    <AboutCoreValues>

                    </AboutCoreValues>
            </AboutMVCContent>
        </AboutMVC>
    </AboutWrapper>
  )
}

export default About