import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const PageSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  justify-items: center;
  padding: 60px 20px;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-top: 40px;
  }
`;

const InfoContainer = styled.div`
  padding-top: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 0;
  }
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const InfoHighlight = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #000b2a;
  font-weight: bold;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;

  strong {
    color: #000b2a;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &:before {
      content: "✔";
      color: #000b2a;
      font-weight: bold;
    }
  }
`;

function ContactSection() {
  return (
    <PageSection>
      <ContactForm
        title="Call (209) 123-1234 or fill out the form below!"
        onSubmit={(data) => console.log("Form submitted:", data)}
      />
      <InfoContainer>
        <InfoTitle>Same Day Junk Removal</InfoTitle>
        <InfoHighlight>
          Professional and efficient junk removal services
        </InfoHighlight>
        <InfoText>
          At Hometown Hauling A2Z, we take pride in offering top-notch junk
          removal services. From cluttered garages to large-scale estate
          cleanouts, we’ve got you covered with reliable and affordable
          solutions tailored to your needs.
        </InfoText>
        <InfoText>
          Our team delivers exceptional value with free estimates and
          transparent pricing—no surprises, just honest service. Whether it's a
          single-item pickup or a complete property cleanup, trust us to handle
          the heavy lifting so you don't have to.
        </InfoText>

        <InfoTitle>Why Choose Us?</InfoTitle>
        <List>
          <li>Same Day Service</li>
          <li>Fully Licensed & Insured</li>
          <li>Family Owned & Operated</li>
          <li>100% Legal Dumping</li>
        </List>
      </InfoContainer>
    </PageSection>
  );
}

export default ContactSection;
