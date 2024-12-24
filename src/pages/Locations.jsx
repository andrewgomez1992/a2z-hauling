import React from "react";
import Footer from "../components/Footer";
import MapComponent from "../components/Maps";
import styled from "styled-components";
import locationsbackground from "../assets/locationsbackground.webp";
import HowItWorks from "../components/HowItWorks";

const OverlaySection = styled.div`
  position: relative;
  height: 60vh; /* Adjust height as needed */
  background: url(${locationsbackground}) no-repeat center center/cover; /* Correctly resolve the imported image */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 11, 42, 0.6); /* Dark overlay for better text contrast */
`;

const Content = styled.div`
  position: relative;
  z-index: 2; /* Ensure it's above the overlay */
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;

const Locations = () => {
  return (
    <div>
      <OverlaySection>
        <Overlay />
        <Content>
          <h1>Locations</h1>
          <p>Big Blue Junk Removal Can Be On-Site Today!</p>
        </Content>
      </OverlaySection>
      <MapComponent />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Locations;
