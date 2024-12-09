import React from "react";
import styled from "styled-components";
import furnitureremoval from "../assets/furnitureremoval.webp";
import applianceremoval from "../assets/applianceremoval.webp";
import dirtremoval from "../assets/dirtremoval.webp";
import james from "../assets/james.webp";

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
  color: #0077c8;
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stacks services vertically */
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

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack text and image vertically */
  }
`;

const StoryText = styled.div`
  color: #333;

  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;

    a {
      color: #0077c8;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    strong {
      color: #008080;
    }
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
      {/* Services Section */}
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

      {/* Our Story Section */}
      <StorySection>
        <StoryText>
          <h3>Our Story</h3>
          <p>
            <strong>Hometown Hauling A2Z</strong> is a junk removal and hauling
            business that serves Modesto, Stockton, Sacramento, Manteca, Tracy,
            Merced, and more.
          </p>
          <p>
            Founded in 2015 by visionary entrepreneur James Bolin, our company
            has quickly become a trusted name in junk removal and hauling
            services. We proudly serve residential, commercial, and industrial
            clients, helping them reclaim their spaces with ease. Our mission is
            to deliver the <a href="#">highest quality service</a>, including{" "}
            <a href="#">free estimates</a> and <strong>same-day pickups</strong>
            . We are <strong>fully licensed and insured</strong>, ensuring every
            job is handled responsibly with a commitment to{" "}
            <a href="#">eco-friendly practices</a>.
          </p>
        </StoryText>
        <StoryImage>
          <img src={james} alt="Team photo" />
        </StoryImage>
      </StorySection>
    </Section>
  );
}

export default ServicesAndStory;
