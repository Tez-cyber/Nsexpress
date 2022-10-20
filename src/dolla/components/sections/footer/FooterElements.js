import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background: #101522;
`

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    padding: 48px 0;
    display: flex;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 820px) {
        max-width: 800px;
        padding: 32px auto;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column; 
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    p {
        color: #aaa;
        font-size: 14px
    }

    @media screen and (max-width: 420px) {
        margin: 0;
        width: 100% ;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 15px;
    margin-bottom: 16px;

    img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
`

export const SocialMedia = styled.div`
    margin: 20px 0;

    i {
        font-size: 20px;
        padding-right: 10px;
    }
`

export const SocialMediaWrap = styled.div`


`

export const FooterLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
    margin-bottom: .5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: .3s ease-out;
    }
`
export const FooterLine = styled.span`
    background: #555;
    display: block;
    height: 1px;
    width: 100%;
    // margin-bottom: 40px;
`

export const FooterDetails = styled.p`
    color: #aaa;
    padding: 20px;
    display: flex;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`

export const FooterSpan = styled.span`
    background: #aaa;
    display: inline-block;
    margin: 0 10px;
    height: 20px;
    width: 1px;

    @media screen and (max-width: 768px) {
        // display: block
        // margin: 0 auto;
    }
`