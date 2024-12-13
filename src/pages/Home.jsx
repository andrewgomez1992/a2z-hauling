import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServicesAndStory from "../components/ServicesAndStory";
import JunkRemovalSection from "../components/JunkRemovalSection";
import JunkRemovalServiceSection from "../components/JunkRemovalServiceSection";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Maps from "../components/Maps";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Hero />
      <ContactSection />
      <Features />
      <ServicesAndStory />
      <JunkRemovalSection />
      <JunkRemovalServiceSection />
      <HowItWorks />
      <Reviews />
      <Maps />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
