import React from "react";
import styled from "styled-components";
import loadingTruck from "../assets/loadingtruck.webp";
import Footer from "../components/Footer";
import StorySection from "../components/StorySection";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import OurPromise from "../components/OurPromise";
import CoreValues from "../components/CoreValues";
import ScrollToTop from "../components/ScrollToTopButton";

const AboutUsSection = styled.section`
  position: relative;
  height: 60vh;
  background: url(${loadingTruck}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  color: white;
  padding: 0 50px;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    height: 50vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 11, 42, 0.6);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StoryContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsSection>
        <Overlay />
        <Content>
          <Title>About Us</Title>
          <Subtitle>
            Discover why we’re the best choice for your junk removal needs. From
            efficient service to exceptional customer care, we’re here to make
            your cleanup effortless and stress-free.
          </Subtitle>
        </Content>
      </AboutUsSection>
      <StoryContainer>
        <StorySection />
      </StoryContainer>

      <WhyChooseUs />
      <Reviews />
      <CoreValues />
      <OurPromise />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
