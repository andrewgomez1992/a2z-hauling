// PhoneButton.js
import React from "react";
import styled from "styled-components";

const StyledPhoneButton = styled.a`
  background-color: transparent;
  color: white;
  padding: 5px 20px;
  font-size: 1.3rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  width: auto;
  text-align: center;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }
`;

const PhoneButton = ({ href, children, ariaLabel }) => {
  return (
    <StyledPhoneButton href={href} aria-label={ariaLabel}>
      {children}
    </StyledPhoneButton>
  );
};

export default PhoneButton;
