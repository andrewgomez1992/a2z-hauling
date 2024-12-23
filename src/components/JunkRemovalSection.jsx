import React from "react";
import styled from "styled-components";
import junknexttofence from "../assets/junknexttofence.webp";
import QuoteButton from "./QuoteButton";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 60px 20px;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 2rem;
    color: #0378ff;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;

    li {
      display: flex; /* Flex layout to align icon and text */
      align-items: flex-start;
      margin-bottom: 15px;
      line-height: 1.6;

      &:before {
        content: "✔";
        color: #0378ff;
        font-weight: bold;
        margin-right: 10px;
        flex-shrink: 0; /* Prevents icon from shrinking */
      }

      p {
        margin: 0;
        flex: 1; /* Makes text span remaining space */
      }

      strong {
        color: #0378ff;
      }

      a {
        color: #0378ff;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Button = styled.button`
  background-color: #0378ff;
  color: #ffffff;
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
    display: block; /* Makes the button take up full width */
    margin: 20px auto 0; /* Centers the button */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function JunkRemovalSection() {
  return (
    <Section>
      <TextContainer>
        <h2>Modesto's Trusted Junk Removal Experts</h2>
        <ul>
          <li>
            <p>
              At Hometown Hauling A2Z, we take pride in offering{" "}
              <strong>efficient and reliable services</strong> that ensure a
              stress-free experience for all our customers.
            </p>
          </li>
          <li>
            <p>
              Our team is committed to helping you{" "}
              <strong>clear out clutter</strong> and make room for what matters
              most. Let us handle the heavy lifting, so you don’t have to.
            </p>
          </li>
          <li>
            <p>
              From same-day pickups to eco-friendly disposal, Hometown Hauling
              A2Z is <strong>your go-to partner</strong> for responsible and
              professional junk removal.{" "}
              <a href="#">Schedule your free consultation today!</a>
            </p>
          </li>
        </ul>
        <QuoteButton href="#quote" aria-label="Get a free quote">
          Get A Free Quote
        </QuoteButton>
      </TextContainer>
      <ImageContainer>
        <img src={junknexttofence} alt="Efficient junk removal service" />
      </ImageContainer>
    </Section>
  );
}

export default JunkRemovalSection;
