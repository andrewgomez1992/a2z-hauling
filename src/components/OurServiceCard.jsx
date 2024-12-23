import React from "react";
import styled from "styled-components";
import truckwithtrash from "../assets/truckwithtrash.webp";
import QuoteButton from "./QuoteButton";

const ServiceCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px 0;
  background-color: #fff;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  /* max-width: 400px; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%; /* Keep the image responsive */
    max-width: 450px;
    height: auto;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;
    color: #555;
  }
`;

const OurServiceCard = () => {
  return (
    <ServiceCardContainer>
      <ImageContainer>
        <img src={truckwithtrash} alt="Junk Removal" />
      </ImageContainer>
      <ContentContainer>
        <h2>Got Junk? We’ve Got You Covered!</h2>
        <p>
          Whether it's broken appliances, old furniture, yard waste, or general
          clutter, our junk removal experts will haul it all away for you.
        </p>
        <p>
          Enjoy fast, friendly, and affordable service that makes clearing your
          space easier than ever. We’re here to help you reclaim your home or
          office with zero stress.
        </p>
        <QuoteButton href="#quote" aria-label="Get a free quote">
          Get A Free Quote
        </QuoteButton>
      </ContentContainer>
    </ServiceCardContainer>
  );
};

export default OurServiceCard;
