import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import eWasteImage from "../assets/appliancetrash.webp";
import { FaCheck } from "react-icons/fa";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding: 60px 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div`
  color: #333;

  h2 {
    font-size: 2.5rem; /* Matches OurPromise */
    margin-bottom: 20px;
    color: #0378ff;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2rem; /* Adjust for mobile */
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      svg {
        margin-right: 15px;
        color: #0077c8; /* Custom blue color for checkmark */
        font-size: 2rem; /* Matches OurPromise */
        flex-shrink: 0;

        @media (max-width: 768px) {
          font-size: 1.5rem; /* Adjust icon size for mobile */
        }
      }

      p {
        font-size: 1.2rem; /* Matches OurPromise */
        margin: 0;

        @media (max-width: 768px) {
          font-size: 1rem; /* Adjust text size for mobile */
        }

        span {
          font-weight: bold;
          color: #0378ff; /* Darker blue for emphasis */
        }
      }
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  position: relative;
  bottom: 10px;
`;

// Motion variants for Framer Motion
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const WhyChooseUs = () => {
  const points = [
    {
      title: "Budget-Friendly Rates",
      text: "Affordable solutions that never compromise on quality.",
    },
    {
      title: "Quick and Reliable",
      text: "Our experienced team ensures prompt and dependable service.",
    },
    {
      title: "Sustainable Practices",
      text: "Committed to recycling and eco-friendly disposal methods.",
    },
    {
      title: "Same-Day Availability",
      text: "Efficient service options for your urgent needs.",
    },
    {
      title: "Fully Covered Services",
      text: "Rest easy knowing we’re licensed, insured, and trustworthy.",
    },
    {
      title: "No Surprises",
      text: "Clear, upfront pricing with no hidden charges.",
    },
  ];

  return (
    <Section>
      {/* Image Section */}
      <ImageContainer>
        <img src={eWasteImage} alt="Why Choose Us" />
      </ImageContainer>
      {/* Text Section */}
      <TextContainer>
        <h2>Why Choose Us?</h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {points.map((point, index) => (
            <motion.li key={index} variants={item}>
              <IconContainer>
                <FaCheck />
              </IconContainer>
              <p>
                <span>{point.title}</span>: {point.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </TextContainer>
    </Section>
  );
};

export default WhyChooseUs;
