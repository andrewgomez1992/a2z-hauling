import React from "react";
import styled from "styled-components";
import guywithtrash from "../assets/guywithtrash.webp";
import QuoteButton from "./QuoteButton";

const DetailedServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  color: #fff;
  /* padding: 40px; */
  /* margin: 40px 0; */
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #fff;
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.6;
    color: #ffffff;
  }
`;

const DetailedServiceCard = () => {
  return (
    <DetailedServiceContainer>
      <ImageContainer>
        <img src={guywithtrash} alt="Junk Removal Service" />
      </ImageContainer>
      <ContentContainer>
        <h2>Furniture Removal in Modesto</h2>
        <p>
          Searching for reliable furniture and junk removal services in Modesto?
          Our team at Big Blue Junk Removal is ready to provide you with
          professional and efficient service. We specialize in removing unwanted
          items and debris to help you declutter your space with ease.
        </p>
        <p>
          From old furniture and mattresses to hot tubs, appliances, and
          construction debris, we handle it all. Our experienced team is
          committed to ensuring a hassle-free experience, giving you peace of
          mind while we take care of the heavy lifting.
        </p>
        <p>
          Contact us today to schedule a pickup and let us help you create a
          cleaner, more organized home or workspace. With our affordable pricing
          and exceptional customer service, clearing out your junk has never
          been easier.
        </p>

        <QuoteButton href="#quote" aria-label="Get a free quote">
          Get My Free Estimate
        </QuoteButton>
      </ContentContainer>
    </DetailedServiceContainer>
  );
};

export default DetailedServiceCard;
