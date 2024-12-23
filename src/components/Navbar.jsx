import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/hha2z.png";
import { Link, NavLink } from "react-router-dom";
import houselogo from "../assets/justhouse.png";
import QuoteButton from "./QuoteButton";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 15px 30px;
  background-color: #0378ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled(Link)`
  img {
    width: 220px;

    @media (max-width: 768px) {
      width: 80px;
      position: relative;
      top: -2px;
      right: 15px;
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
    background-color: #0378ff; /* Match navbar background */
    color: #f2f2f2; /* Super light grey for mobile links */
    padding: 20px 0;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 1rem;
  color: #f2f2f2;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }

  @media (max-width: 768px) {
    text-align: center;
    top: 0px;
  }
`;

const PhoneLink = styled.a`
  font-size: 1.2rem;
  color: #202020;
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
    filter: invert(95%); /* Makes the icon light grey */
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo to="/">
        <picture>
          <source srcSet={houselogo} media="(max-width: 768px)" />
          <img src={logo} alt="Big Blue Junk Removal" />
        </picture>
      </Logo>
      <Hamburger
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
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
        <MenuLink to="/" end onClick={() => setIsOpen(false)}>
          Home
        </MenuLink>
        <MenuLink to="/about-us" onClick={() => setIsOpen(false)}>
          About Us
        </MenuLink>
        <MenuLink to="/services" onClick={() => setIsOpen(false)}>
          Services
        </MenuLink>
        <MenuLink to="/locations" onClick={() => setIsOpen(false)}>
          Locations
        </MenuLink>
        <MenuLink to="/contact-us" onClick={() => setIsOpen(false)}>
          Contact Us
        </MenuLink>
        <PhoneLink href="tel:2091231234">(209) 123-1234</PhoneLink>
        <QuoteButton onClick={() => setIsOpen(false)}>
          Get A Free Quote
        </QuoteButton>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
