import React from "react";
import ReusableOverlaySection from "../components/ReusableOverlaySection";
import loadingTruck from "../assets/loadingtruck.webp";
import Footer from "../components/Footer";
import StorySection from "../components/StorySection";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import OurPromise from "../components/OurPromise";
import CoreValues from "../components/CoreValues";
import ScrollToTop from "../components/ScrollToTopButton";

const AboutUs = () => {
  return (
    <>
      <ReusableOverlaySection
        backgroundImage={loadingTruck}
        title="About Us"
        subtitle="Discover why we’re the best choice for your junk removal needs. From efficient service to exceptional customer care, we’re here to make your cleanup effortless and stress-free."
        height="60vh"
        mobileHeight="50vh"
        overlayColor="rgba(0, 11, 42, 0.6)"
        justifyContent="flex-start"
        textAlign="left"
        color="white"
      />
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <StorySection />
      </div>
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
