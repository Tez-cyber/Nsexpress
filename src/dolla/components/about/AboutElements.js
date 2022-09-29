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
    max-width: 1000px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    justify-content: center;
    grid-gap: 16px;
`
export const AboutCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 40px;
    color: #000;
    transition: all .3s ease;

    &:hover {
        transform: translateY(-5px)
    }
`

export const AboutFace1 = styled.div`

` 

export const AboutFace2 = styled.div`

` 

export const AboutMissionIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`
export const AboutVision = styled.div`

`

export const AboutVisionIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`

export const AboutCoreValues = styled.div`

`

export const AboutCoreValuesIcon = styled(FiSettings)`
    color: #01bf71;
    font-size: 2rem;
`
export const AboutWord = styled.h5`
    color: #000;
    padding-top: 10px;
`
