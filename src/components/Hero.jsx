import React from "react";
import styled from "styled-components";
import placeholder from "../assets/herobackground.webp"; // Replace with your actual image

const HeroSection = styled.section`
  position: relative;
  background: url(${placeholder}) no-repeat center center/cover;
  height: 80vh;
  display: flex;
  justify-content: flex-start; /* Align text to the left */
  align-items: center;
  text-align: left;
  color: white;
  padding: 0 50px;

  @media (max-width: 768px) {
    background-position: center top;
    padding: 0 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 128, 128, 0.5); /* Teal color with 50% opacity */
  clip-path: polygon(
    0 0,
    70% 0,
    50% 100%,
    0% 100%
  ); /* Creates the slanted overlay */
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #f1f1f1;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CTAButton = styled.a`
  background-color: #008080;
  color: white;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  line-height: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    background-color: #0a215f;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  &:focus {
    outline: 2px solid white; /* Adds focus outline for accessibility */
    outline-offset: 4px;
  }
`;

const PhoneButton = styled.a`
  background-color: transparent;
  color: white;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

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

function Hero() {
  return (
    <HeroSection
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      <Overlay />
      <Content>
        <Title id="hero-title">Hometown Hauling A2Z</Title>
        <Subtitle id="hero-description">
          Your Local Junk Removal Experts
        </Subtitle>
        <ButtonContainer>
          <CTAButton href="#quote" aria-label="Get a free quote">
            Get A Free Quote
          </CTAButton>
          <PhoneButton
            href="tel:2091231234"
            aria-label="Call us at 209-123-1234"
          >
            Call Us: (209) 123-1234
          </PhoneButton>
        </ButtonContainer>
      </Content>
    </HeroSection>
  );
}

export default Hero;
