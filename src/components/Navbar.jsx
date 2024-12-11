import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/hha2z.png";
import houselogo from "../assets/justhouse.png";
import QuoteButton from "./QuoteButton";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 15px 30px;
  background-color: #000b2a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  img {
    width: 220px;

    @media (max-width: 768px) {
      width: 80px;
      position: relative;
      top: 5px;
      right: 5px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  color: #f2f2f2; /* Super light grey for text */
  align-items: center;

  @media (max-width: 1000px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #000b2a; /* Match navbar background */
    color: #f2f2f2; /* Super light grey for mobile links */
    padding: 20px 0;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: #f2f2f2;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    text-align: center;
    top: 0px;
  }
`;

const PhoneLink = styled.a`
  font-size: 1.2rem;
  color: #04f7ff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    text-align: center; /* Center align for mobile */
    display: block; /* Ensure it stacks properly */
    top: 0px;
  }
`;

const Hamburger = styled.div`
  display: none; /* Hide on larger screens */
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the menu */
  width: 30px;
  height: 30px;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 30px;
    height: 30px;
    filter: invert(85%); /* Makes the icon light grey */
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <picture>
          <source srcSet={houselogo} media="(max-width: 768px)" />
          <img src={logo} alt="Big Blue Junk Removal" />
        </picture>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="Close Menu"
          />
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
            alt="Open Menu"
          />
        )}
      </Hamburger>
      <NavLinks $isOpen={isOpen}>
        <NavLink>Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Locations</NavLink>
        <NavLink>Contact Us</NavLink>
        <PhoneLink href="tel:2091231234">(209) 123-1234</PhoneLink>
        <QuoteButton>Get A Free Quote</QuoteButton>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
