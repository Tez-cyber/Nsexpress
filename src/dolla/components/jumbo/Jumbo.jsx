import React, { useState } from 'react'
import {
  JumboContainer,
  JumboBg,
  VideoBg,
  JumboContent,
  JumboH1,
  JumboP,
  JumboBtnWrapper,
  ArrowForward,
  ArrowRight
} from './JumboElements'
import { Button } from '../ButtonElements'
import Video from '../../assets/videos/video3.mp4';
import Fade from 'react-reveal/Fade'

const Jumbo = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
      <JumboContainer>
        <JumboBg> 
          <VideoBg autoPlay muted loop src={Video}  />
        </JumboBg>
        <JumboContent>
          <Fade down cascade>
            <JumboH1>
              Creating Professional Brand Solution
            </JumboH1>
            <JumboP>
              We specialize in the provision of world-class standard
              modern identity for your brand
            </JumboP>
          </Fade>
          <Fade up cascade>
            <JumboBtnWrapper>
              <Button to="/about" 
                onMouseEnter={() => onHover}
                onMouseLeave={() => onHover}
                primary='true'
                dark='true'
              >
                Get started {hover ? <ArrowForward /> : <ArrowRight /> }
              </Button>
            </JumboBtnWrapper>
          </Fade>
        </JumboContent>
      </JumboContainer>
  )
}

export default Jumbo