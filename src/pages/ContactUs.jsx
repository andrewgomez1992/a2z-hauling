import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import MapComponent from "../components/Maps";

const PageWrapper = styled.div``;

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  width: 100%;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 20px; /* Add padding on mobile */
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 500px;

  h2 {
    font-size: 1.5rem;
    color: #0378ff;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    span {
      font-size: 1rem;
      color: #333;
    }
  }
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  color: #0378ff;
  margin-right: 10px;
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9; /* Light background for better visibility */
`;

const ContactUs = () => {
  return (
    <PageWrapper>
      <ContactSection>
        {/* Left Section */}
        <LeftSection>
          <h2>Get In Touch</h2>
          <h1>Junk Removal Made Simple</h1>
          <p>
            At Hometown Hauling A2Z, we help you take back your space. Whether
            it’s outdated furniture, unused electronics, or general clutter, we
            make the process hassle-free and straightforward.
          </p>
          <p>
            Let our team of professionals clear your space quickly and
            efficiently. Don’t let junk take over—contact us today and get the
            clean space you deserve!
          </p>
          <div className="info-item">
            <InfoIcon>📞</InfoIcon>
            <span>Phone: (209) 123-1234</span>
          </div>
          <div className="info-item">
            <InfoIcon>📍</InfoIcon>
            <span>Address: Stockton, CA 95269</span>
          </div>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <ContactForm />
        </RightSection>
      </ContactSection>
      <MapComponent />
      <Footer />
    </PageWrapper>
  );
};

export default ContactUs;
