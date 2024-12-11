import React from "react";
import styled from "styled-components";
import { FaTruck, FaRecycle, FaTree } from "react-icons/fa";

const FeaturesSection = styled.section`
  background-color: #000b2a;
  padding: 60px 20px;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stacks items vertically on smaller screens */
    gap: 20px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 3rem;
  color: #04f7ff;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #f2f2f2;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #f2f2f2;
  line-height: 1.5;
  max-width: 400px;
`;

function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Efficient Junk Hauling",
      description: "We handle your junk removal with speed and precision.",
    },
    {
      icon: <FaRecycle />,
      title: "Eco-Friendly Disposal",
      description: "Committed to recycling and sustainable practices.",
    },
    {
      icon: <FaTree />,
      title: "Yard Cleanup Experts",
      description: "Transform your outdoor space into a tidy and serene area.",
    },
  ];

  return (
    <FeaturesSection>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <IconContainer>{feature.icon}</IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
}

export default Features;
