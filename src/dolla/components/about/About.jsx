import React from 'react'
import {
    AboutWrapper, AboutContent, AboutDetails,
    AboutHeader, AboutP, AboutSpin, AboutSpinDiv,
    AboutSpin02, AboutMVC, AboutMVCSpan,
    AboutMVCHead,  AboutMVCHeading, AboutMVCContent, 
    AboutMission, AboutVision, AboutCoreValues,
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
            {/* <AboutMVCContent>
                    <AboutCard>
                        <AboutFace1>
                            <AboutMissionIcon />
                            <AboutWord>
                                Mission
                            </AboutWord>
                        </AboutFace1>
                        <AboutFace2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, architecto maiores labore amet dicta non laboriosam porro culpa enim exercitationem commodi suscipit. Eveniet, facilis. Maxime dolores fugit vero.
                            Aliquam vel quos fugiat fugit? Cumque, quod tempora blanditiis rem laudantium sunt tenetur est facere dolor, hic illum iure a magnam earum nostrum, laboriosam ad omnis culpa quis? Pariatur, numquam!
                            Ab repudiandae atque at tempore, obcaecati dicta fugit unde, beatae repellendus quibusdam magnam tempora molestias cum impedit non cumque amet culpa. Sapiente ex at temporibus omnis quos totam dolores deserunt!
                        </AboutFace2>
                    </AboutCard>
                    <AboutCard>
                    <AboutCard>
                        <AboutFace1>
                            <AboutVisionIcon />
                            <AboutWord>
                                Mission
                            </AboutWord>
                        </AboutFace1>
                        <AboutFace2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, architecto maiores labore amet dicta non laboriosam porro culpa enim exercitationem commodi suscipit. Eveniet, facilis. Maxime dolores fugit vero.
                            Aliquam vel quos fugiat fugit? Cumque, quod tempora blanditiis rem laudantium sunt tenetur est facere dolor, hic illum iure a magnam earum nostrum, laboriosam ad omnis culpa quis? Pariatur, numquam!
                            Ab repudiandae atque at tempore, obcaecati dicta fugit unde, beatae repellendus quibusdam magnam tempora molestias cum impedit non cumque amet culpa. Sapiente ex at temporibus omnis quos totam dolores deserunt!
                        </AboutFace2>
                    </AboutCard>
                    </AboutCard>
                    <AboutCard>
                        <AboutCard>
                            <AboutFace1>
                                <AboutCoreValuesIcon />
                                <AboutWord>
                                    Mission
                                </AboutWord>
                            </AboutFace1>
                            <AboutFace2>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, inventore debitis, architecto maiores labore amet dicta non laboriosam porro culpa enim exercitationem commodi suscipit. Eveniet, facilis. Maxime dolores fugit vero.
                                Aliquam vel quos fugiat fugit? Cumque, quod tempora blanditiis rem laudantium sunt tenetur est facere dolor, hic illum iure a magnam earum nostrum, laboriosam ad omnis culpa quis? Pariatur, numquam!
                                Ab repudiandae atque at tempore, obcaecati dicta fugit unde, beatae repellendus quibusdam magnam tempora molestias cum impedit non cumque amet culpa. Sapiente ex at temporibus omnis quos totam dolores deserunt!
                            </AboutFace2>
                    </AboutCard>
                    </AboutCard>
            </AboutMVCContent> */}
        </AboutMVC>
    </AboutWrapper>
  )
}

export default About