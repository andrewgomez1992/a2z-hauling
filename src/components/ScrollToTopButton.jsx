import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: #393939; /* Teal color */
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 900;
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 1000;

  /* Optional: Add hover effect */
  &:hover {
    background-color: #555555;
  }

  /* Optional: Respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
    opacity: ${(props) => (props.$visible ? "1" : "0")};
    visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollButton
      onClick={scrollToTop}
      $visible={isVisible} // Use transient prop
      aria-label="Scroll to top"
    >
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;
