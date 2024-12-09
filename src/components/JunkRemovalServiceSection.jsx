import React from "react";
import styled from "styled-components";
import garagejunk from "../assets/garagejunk.webp";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 60px 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Stack items on smaller screens */
    padding: 40px 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 2rem;
    color: #008080;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: #ddd;

    strong {
      color: #008080;
    }

    a {
      color: #0077c8;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Button = styled.button`
  background-color: #008080;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 20px auto 0;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function JunkRemovalServiceSection() {
  return (
    <Section>
      <ImageContainer>
        <img src={garagejunk} alt="Junk removal service in action" />
      </ImageContainer>
      <TextContainer>
        <h2>Best Junk Removal Service in Modesto</h2>
        <p>
          Hometown Hauling A2Z offers{" "}
          <strong>fast, affordable, and reliable junk removal services</strong>{" "}
          to Modesto and the surrounding areas. Whether you need to clean out
          your home, garage, or office, we’re here to help!
        </p>
        <p>
          Our company was established in 2015 and has been committed to
          providing high-quality service at a reasonable price. From{" "}
          <strong>garage cleanouts</strong> to{" "}
          <strong>appliance removal</strong>, we ensure a smooth and hassle-free
          experience.
        </p>
        <p>
          We’re proud to use <strong>eco-friendly practices</strong> to minimize
          waste and promote recycling whenever possible. Our team is experienced
          in removing unwanted items quickly and efficiently, saving you time
          and effort.
        </p>
        <p>
          Ready to reclaim your space? <a href="#">Contact us today</a> for a
          free quote and see why we’re the #1 choice for junk removal in
          Modesto!
        </p>
        <Button>Get A Free Quote</Button>
      </TextContainer>
    </Section>
  );
}

export default JunkRemovalServiceSection;
