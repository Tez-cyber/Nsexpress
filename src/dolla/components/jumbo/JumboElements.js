import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const JumboContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1

`

export const JumboBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    :before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        // background: linear-gradient(
        //     100deg,
        //     rgba(0, 0, 0, .7) 0%,
        //     rgba(0, 0, 0, .9) 100%
        // ), linear-gradient(180deg, rgba(0, 0, 0, .3) 0%,
        // transparent);
        background: #000;
        opacity: .8;
        z-index: 2;
    }
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 768px){
        object-fit: fill;
    }
`

export const JumboContent = styled.div`
    z-index: 3;
    // max-width: 1200px;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        top: 30%;
    }
`

export const JumboH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`
export const JumboP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

export const JumboBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

function myFunction(a, b) {
    return (
        (b/100) * a
    )
}
myFunction(100, 50)
