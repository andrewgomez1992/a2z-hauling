import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaDollarSign,
  FaClock,
  FaShieldAlt,
  FaPeopleCarry,
  FaRecycle,
} from "react-icons/fa";
import crew from "../assets/crew.webp";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 60px 100px; /* Reduced padding for better responsiveness */
  gap: 20px;
  background-color: #f9f9f9;

  @media (max-width: 1024px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns for smaller screens */
    padding: 20px 20px; /* Further reduce padding */
    gap: 30px;
  }
`;

const TextContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #0378ff;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2rem; /* Smaller font size for mobile */
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    svg {
      margin-right: 15px;
      font-size: 2rem;
      color: #0077c8; /* Custom blue color */
      flex-shrink: 0;

      @media (max-width: 768px) {
        font-size: 1.5rem; /* Adjust icon size for mobile */
      }
    }

    p {
      font-size: 1.2rem;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 1rem; /* Smaller text for mobile */
      }

      span {
        font-weight: bold;
        color: #333; /* Darker text for emphasis */
      }
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    max-width: 400px; /* Restrict max width for large screens */
    margin: 0 auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      max-width: 100%; /* Ensure full width for mobile */
    }
  }
`;

// Motion Variants
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

const OurPromise = () => {
  const promises = [
    {
      icon: <FaDollarSign />,
      title: "Affordable Rates",
      text: "Best prices guaranteed for all services.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      text: "Punctuality you can count on.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Licensed & Insured",
      text: "Your peace of mind is our priority.",
    },
    {
      icon: <FaPeopleCarry />,
      title: "Family-Operated",
      text: "A business built on community values.",
    },
    {
      icon: <FaRecycle />,
      title: "Eco-Friendly Solutions",
      text: "Committed to sustainable practices.",
    },
  ];

  return (
    <Section>
      <TextContainer>
        <h2>Our Commitment To You</h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {promises.map((promise, index) => (
            <motion.li key={index} variants={item}>
              {promise.icon}
              <p>
                <span>{promise.title}:</span> {promise.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </TextContainer>
      <ImageContainer>
        <img src={crew} alt="Our Promise" />
      </ImageContainer>
    </Section>
  );
};

export default OurPromise;
