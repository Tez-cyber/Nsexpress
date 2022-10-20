import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    SocialMedia,
    SocialMediaWrap,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLine,
    FooterDetails,
    FooterSpan
} from './FooterElements'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Nsexpress</FooterLinkTitle>
                            <p>Nigeria's Leading Web & Digital Agency</p>
                            <SocialMedia>
                                <SocialMediaWrap>
                                    <FooterLink to="/"><i><FaFacebook /></i></FooterLink>
                                    <FooterLink to="/"><i><FaTwitter /></i></FooterLink>
                                    <FooterLink to="/"><i><FaInstagram /></i></FooterLink>
                                    <FooterLink to="/"><i><FaLinkedin /></i></FooterLink>
                                </SocialMediaWrap>
                            </SocialMedia>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Business</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                            <FooterLink to="/about">About</FooterLink>
                            <FooterLink to="/">Services</FooterLink>
                            <FooterLink to="/">Trainings</FooterLink>
                            <FooterLink to="/">Contact</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            {/* <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        Nsexpress
                    </SocialLogo>
                </SocialMediaWrap>
            </SocialMedia> */}
            <FooterLine></FooterLine>
            <FooterDetails>
                <div>
                    Copyright &copy; {new Date().getFullYear()}, 
                    All rights reserved
                </div>
                    <FooterSpan></FooterSpan>
                <div>
                    Powered by Nsexpress Digital Limited
                </div>
            </FooterDetails>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer