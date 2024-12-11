import React from "react";
import styled from "styled-components";
import {
  FaCalendarAlt,
  FaCalculator,
  FaHardHat,
  FaCheckCircle,
} from "react-icons/fa";

const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: #000b2a;
  margin: 10px auto 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #04f7ff;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Button = styled.button`
  margin-top: 30px;
  background-color: #000b2a;
  color: #f2f2f2;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin: 20px auto 0;
  }
`;

function HowItWorks() {
  const steps = [
    { icon: <FaCalendarAlt />, title: "Schedule An Appointment" },
    { icon: <FaCalculator />, title: "Get A Free Estimate" },
    { icon: <FaHardHat />, title: "We'll Get To Work" },
    { icon: <FaCheckCircle />, title: "Get a Tidy Place For Yourself" },
  ];

  return (
    <Section>
      <Title>How It Works</Title>
      <Underline />
      <Grid>
        {steps.map((step, index) => (
          <Step key={index}>
            <Icon>{step.icon}</Icon>
            <StepTitle>{step.title}</StepTitle>
          </Step>
        ))}
      </Grid>
      <Button>Get A Free Quote</Button>
    </Section>
  );
}

export default HowItWorks;
