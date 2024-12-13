// src/components/ServicesAndStory.jsx
import React from "react";
import styled from "styled-components";
import furnitureremoval from "../assets/furnitureremoval.webp";
import applianceremoval from "../assets/applianceremoval.webp";
import dirtremoval from "../assets/dirtremoval.webp";
import StorySection from "./StorySection";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #000b2a;
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background-size: cover;
  height: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Subtle zoom effect */
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay for text contrast */
    z-index: 1;
  }

  h3 {
    position: relative;
    z-index: 2;
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
`;

function ServicesAndStory() {
  const services = [
    { title: "Furniture Removal", image: furnitureremoval },
    { title: "Appliance Removal", image: applianceremoval },
    { title: "Dirt Removal", image: dirtremoval },
  ];

  return (
    <Section>
      <SectionTitle>We’re Here To Help You</SectionTitle>
      <Subtitle>SERVICES WE PROVIDE</Subtitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <h3>{service.title}</h3>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <StorySection />
    </Section>
  );
}

export default ServicesAndStory;
