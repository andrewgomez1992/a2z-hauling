import React from "react";
import styled, { keyframes } from "styled-components";
import james2 from "../assets/james2.webp";
import QuoteButton from "./QuoteButton";
import PhoneButton from "./PhoneButton";

// Define the fade-in and slide-up animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Start 20px below */
  }
  to {
    opacity: 1;
    transform: translateY(0);    /* End at original position */
  }
`;

const HeroSection = styled.section`
  position: relative;
  background: url(${james2}) no-repeat center center/cover;
  height: 80vh;
  display: flex;
  justify-content: flex-start; /* Align text to the left on desktop */
  align-items: center;
  text-align: left;
  color: white;
  padding: 0 50px;

  @media (max-width: 768px) {
    background-position: center top;
    padding: 0 20px;
    height: 60vh;
    justify-content: center; /* Center the Content container on mobile */
    text-align: center; /* Center-align all text within HeroSection */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 11, 42, 0.5); /* Navy blue color with 50% opacity */
  clip-path: polygon(
    0 0,
    70% 0,
    50% 100%,
    0% 100%
  ); /* Creates the slanted overlay */

  @media (max-width: 768px) {
    clip-path: none; /* Optional: Adjust clip-path for mobile if needed */
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%; /* Ensure Content takes full width on mobile */
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  opacity: 0; /* Initial state for animation */
  animation: ${fadeInUp} 1s forwards; /* Apply animation */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f1f1f1;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  opacity: 0; /* Initial state for animation */
  animation: ${fadeInUp} 1s forwards;
  animation-delay: 0.5s; /* Delay to stagger with Title */

  /* Ensure the animation starts after Title's animation */
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

const PhoneButtonContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

function Hero() {
  return (
    <HeroSection
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      <Overlay />
      <Content>
        <Title id="hero-title">Hometown Hauling A2Z</Title>
        <Subtitle id="hero-description">Quick and Clean</Subtitle>
        <ButtonContainer>
          <QuoteButton href="#quote" aria-label="Get a free quote">
            Get A Free Quote
          </QuoteButton>
          <PhoneButtonContainer>
            <PhoneButton
              href="tel:2091231234"
              ariaLabel="Call us at 209-123-1234"
            >
              Call Us: (209) 123-1234
            </PhoneButton>
          </PhoneButtonContainer>
        </ButtonContainer>
      </Content>
    </HeroSection>
  );
}

export default Hero;
