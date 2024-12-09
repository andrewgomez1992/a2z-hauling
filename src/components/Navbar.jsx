import React, { useState } from "react";
import styled from "styled-components";
import logoplaceholder from "../assets/logoplaceholder.png";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #0044cc;

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
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #008080;
  }
`;

const PhoneLink = styled.a`
  font-size: 1.2rem;
  color: #008080;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #333;
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

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #333;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>
        <img src={logoplaceholder} alt="Big Blue Junk Removal" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <Bar />
        <Bar />
        <Bar />
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
