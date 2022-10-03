import styled from 'styled-components'
import { FiSettings } from 'react-icons/fi'

export const AboutWrapper = styled.div`
    background: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 100px;
`
export const AboutContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    padding: 20px 0;
    gap: 5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr)
    }
`

export const AboutDetails = styled.div`
    max-width: 500px;
`
export const AboutHeader = styled.h5`
    text-transform: uppercase;
    color: #01fb71;
`

export const AboutP = styled.p`
    margin-top: 20px;
    line-height: 1.5;
`

export const AboutSpinDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 4rem);
    margin: 20px 0;
`

export const AboutSpin = styled.span`
    // display: block;
    // background: #01fb71;
    border: 3px solid #01fb71;
    width: 100px;
    height: 100px;
    transition: all .4s ease;
    animation: spin 10s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
export const AboutSpin02 = styled.span`
    display: block;
    border: 3px solid #aaa;
    width: 100px;
    height: 100px;
    transition: all .4s ease;
    animation: spin02 10s linear infinite;

    @keyframes spin02 {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`
export const AboutMVC = styled.div`
    margin-top: 30px;
`
export const AboutMVCSpan = styled.span`
    display: block;
    background: #fff;
    border-radius: 3px;
    width: 3px;
    height: 20px;
`
export const AboutMVCHeading = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 285px;
`

export const AboutMVCHead = styled.p`
    color: #01fb71;
    text-transform: uppercase;
    font-size: 15px;
`
export const AboutMVCContent = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    justify-content: center;
    grid-gap: 16px;
`
export const AboutCard = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    cursor: pointer;

    &:hover .face1 {
        transform: translateY(-100%) rotateX(90deg);
        background: #01fb71;
    }

    &:hover .face2 {
        transform: translateY(0%) rotateX(0deg)
    }
`

export const AboutFace1 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: .5s;
    background: #000;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform-origin: bottom;
    z-index: 1;

    // &:hover {
    //     transform: translateY(-100%) rotateX(90deg);
    //     background: #01fb71;
    // }
` 

export const AboutFace2 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: .5s;
    background: #fff;
    color: #000;
    display: flex;
    text-align: center;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transfrom-origin: top;
    transfrom: translateY(100%) rotateX(90deg);
` 

export const AboutMissionIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`

export const AboutVisionIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`

export const AboutCoreValuesIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`

export const AboutWord = styled.h4`
    color: #fff;
    padding-top: 10px;
`
