import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa"

export const WhyWrapper = styled.div`
    background: #000300;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 100px;

    @media screen and (max-width: 768px) {
        padding: 100px 40px;
    }
`

export const WhyContainer = styled.div`

`

export const WhyFirstElement = styled.div`
   
`

export const WhyHead = styled.p`
   font-size: 30px;
`

export const WhyFirstDiv = styled.p`
    padding: 30px 0;
    font-size: 14px
    line-height: 1rem;
`

export const WhySecondDiv = styled.p`
    font-size: 14px
    line-height: 1rem;
`

export const WhySecondElement = styled.div`
   margin-top: 40px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);

   @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
   }
`
export const WhyCard = styled.div`
   background: #fff;
   margin-right: 30px;
   border-radius: 6px;
   color: #000;
   padding: 20px; 
`
export const WhyIcon = styled(FaThumbsUp)`
   font-size: 1.5rem;
`
export const WhyH2 = styled.h3`
   padding: 10px 0;
   font-style: bold;
`
export const WhyP = styled.p`
   font-size: 14px;
`