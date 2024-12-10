import React, { useState } from "react";
import styled from "styled-components";
import logoplaceholder from "../assets/logoplaceholder.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Changed from fixed to relative */
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%; /* Aligns directly below the navbar */
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px 0; /* Adds spacing inside the dropdown */
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  position: relative;
  top: 17px;

  &:hover {
    color: #008080;
  }

  @media (max-width: 768px) {
    text-align: center; /* Center align for mobile */
    top: 0px;
  }
`;

const PhoneLink = styled.a`
  font-size: 1.2rem;
  color: #008080;
  text-decoration: none;
  font-weight: bold;

  position: relative;
  top: 15px;

  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    text-align: center; /* Center align for mobile */
    display: block; /* Ensure it stacks properly */
    top: 0px;
  }
`;

const QuoteButton = styled.button`
  background-color: #008080;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: 10px auto; /* Center the button */
  width: auto; /* Allow button to shrink to content */

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: auto; /* No longer full-width */
    padding: 10px 30px; /* Add some spacing for better look */
  }
`;

const Hamburger = styled.div`
  display: none; /* Hide on larger screens */
  cursor: pointer;
  z-index: 1001; /* Ensure it's above the menu */
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    display: flex; /* Show only on smaller screens */
    align-items: center;
    justify-content: center;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <img src={logoplaceholder} alt="Big Blue Junk Removal" />
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
