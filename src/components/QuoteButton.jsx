import React from "react";
import styled from "styled-components";

const StyledQuoteButton = styled.button`
  background-color: #04f7ff;
  color: #333333;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  /* margin: 10px auto; */
  width: auto; /* Allow button to shrink to content */

  &:hover {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    width: auto; /* No longer full-width */
    padding: 10px 30px; /* Add some spacing for better look */
  }
`;

const QuoteButton = ({ children, onClick }) => {
  return <StyledQuoteButton onClick={onClick}>{children}</StyledQuoteButton>;
};

export default QuoteButton;