import React from "react";
import Footer from "../components/Footer";
import OurServiceCard from "../components/OurServiceCard";
import HowItWorks from "../components/HowItWorks";
import DetailedServiceCard from "../components/DetailedServiceCard";
import servicebackground from "../assets/servicebackground.webp";
import ReusableOverlaySection from "../components/ReusableOverlaySection";
import furnitureremoval from "../assets/furnitureremoval.webp";
import applianceremoval from "../assets/applianceremoval.webp";
import dirtremoval from "../assets/dirtremoval.webp";
import styled from "styled-components";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #eaeaea;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #0378ff;
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

const Services = () => {
  return (
    <div>
      <ReusableOverlaySection
        title="Our Services"
        subtitle="Explore the unique services we offer to bring light and warmth to your life."
        height="60vh"
        mobileHeight="50vh"
        overlayColor="rgba(0, 11, 42, 0.6)"
        justifyContent="center"
        textAlign="center"
        color="white"
        backgroundImage={servicebackground}
      />
      <OurServiceCard />
      <DetailedServiceCard />
      <Section>
        <SectionTitle>We’re Here To Help You</SectionTitle>
        <Subtitle>SERVICES WE PROVIDE</Subtitle>
        <ServicesGrid>
          <ServiceCard style={{ backgroundImage: `url(${furnitureremoval})` }}>
            <h3>Furniture Removal</h3>
          </ServiceCard>
          <ServiceCard style={{ backgroundImage: `url(${applianceremoval})` }}>
            <h3>Appliance Removal</h3>
          </ServiceCard>
          <ServiceCard style={{ backgroundImage: `url(${dirtremoval})` }}>
            <h3>Dirt Removal</h3>
          </ServiceCard>
        </ServicesGrid>
      </Section>
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Services;
