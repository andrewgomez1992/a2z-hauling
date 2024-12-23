import React from "react";
import styled from "styled-components";
import {
  FaHandshake,
  FaRecycle,
  FaTruck,
  FaRegSmileBeam,
} from "react-icons/fa";

const Section = styled.section`
  padding: 50px 20px;
  background-color: #f0f4ff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0378ff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 200px;

  svg {
    font-size: 3rem;
    color: #0077c8;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #0378ff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 0;
  }
`;

// Component
const CoreValues = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Trustworthy",
      description: "Committed to delivering reliable and honest services.",
    },
    {
      icon: <FaRecycle />,
      title: "Eco-Friendly",
      description:
        "Dedicated to sustainable and environmentally safe practices.",
    },
    {
      icon: <FaTruck />,
      title: "Efficient Service",
      description: "Swift and seamless solutions tailored to your needs.",
    },
    {
      icon: <FaRegSmileBeam />,
      title: "Customer First",
      description: "Focused on providing the best experience for our clients.",
    },
  ];

  return (
    <Section>
      <Title>Our Core Values</Title>
      <Subtitle>What makes us stand out in the junk removal industry</Subtitle>
      <ValuesGrid>
        {values.map((value, index) => (
          <ValueCard key={index}>
            {value.icon}
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </ValueCard>
        ))}
      </ValuesGrid>
    </Section>
  );
};

export default CoreValues;
