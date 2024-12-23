import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for navigation
import james from "../assets/james.webp";

const StorySectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryText = styled.div`
  color: #333;

  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
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
      color: #0378ff;
    }
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StorySection = () => {
  return (
    <StorySectionWrapper>
      <StoryText>
        <Link to="/about-us">
          <h3>Our Story</h3>
        </Link>
        <p>
          <strong>Hometown Hauling A2Z</strong> is a junk removal and hauling
          business that serves Modesto, Stockton, Sacramento, Manteca, Tracy,
          Merced, and more.
        </p>
        <p>
          Founded in 2024 by visionary entrepreneur James Bolin, our company has
          quickly become a trusted name in junk removal and hauling services. We
          proudly serve residential, commercial, and industrial clients, helping
          them reclaim their spaces with ease. Our mission is to deliver the{" "}
          <a href="#">highest quality service</a>, including{" "}
          <a href="#">free estimates</a> and <strong>same-day pickups</strong>.
          We are <strong>fully licensed and insured</strong>, ensuring every job
          is handled responsibly with a commitment to{" "}
          <a href="#">eco-friendly practices</a>.
        </p>
      </StoryText>
      <StoryImage>
        <img src={james} alt="Team photo" />
      </StoryImage>
    </StorySectionWrapper>
  );
};

export default StorySection;
