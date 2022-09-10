import React from 'react'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink
} from './NavElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" >Nsexpress</NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon> 
          <NavMenu>
            <NavItem>
              <NavLinks  to="about" >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks  to="discover" >Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks  to="services" >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks  to="signup" >Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin" >Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar