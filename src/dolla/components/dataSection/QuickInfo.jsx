import React from 'react'
import { Button } from '../ButtonElements'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img
} from './InfoElements'

const QuickInfo = ({
    lightBg, id, imgStart, 
    topLine, lightText, darkText, 
    headline, desc, buttonLabel,
    img, alt, primary, dark, dark2,
    fade
    }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                {/* {
                    fade ? (
                        <Fade left cascade>
                            <InfoRow imgStart={imgStart} >
                                <Column1>
                                    <TextWrapper>
                                        <TopLine>{topLine}</TopLine>
                                        <Heading lightText={lightText} >{headline}</Heading>
                                        <Subtitle darkText={darkText}>{desc}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home"
                                                smooth={true}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                                primary={primary ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </BtnWrap>
                                    </TextWrapper>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src={img} alt={alt} ></Img>
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </Fade>
                    ) : (
                        <Fade right cascade>
                            <InfoRow imgStart={imgStart} >
                                <Column1>
                                    <TextWrapper>
                                        <TopLine>{topLine}</TopLine>
                                        <Heading lightText={lightText} >{headline}</Heading>
                                        <Subtitle darkText={darkText}>{desc}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home"
                                                smooth={true}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                                primary={primary ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </BtnWrap>
                                    </TextWrapper>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src={img} alt={alt} ></Img>
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
                        </Fade>
                    )
                } */}
                    <InfoRow imgStart={imgStart} >
                                <Column1>
                                    <TextWrapper>
                                        <TopLine>{topLine}</TopLine>
                                        <Heading lightText={lightText} >{headline}</Heading>
                                        <Subtitle darkText={darkText}>{desc}</Subtitle>
                                        <BtnWrap>
                                            <Button to="home"
                                                smooth={true}
                                                spy={true}
                                                exact="true"
                                                offset={-80}
                                                dark={dark ? 1 : 0}
                                                dark2={dark2 ? 1 : 0}
                                                primary={primary ? 1 : 0}
                                            >
                                                {buttonLabel}
                                            </Button>
                                        </BtnWrap>
                                    </TextWrapper>
                                </Column1>
                                <Column2>
                                    <ImgWrap>
                                        <Img src={img} alt={alt} ></Img>
                                    </ImgWrap>
                                </Column2>
                            </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default QuickInfo