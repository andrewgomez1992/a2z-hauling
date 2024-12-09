import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ContactSection from "./components/ContactSection";
import ServicesAndStory from "./components/ServicesAndStory";
import JunkRemovalSection from "./components/JunkRemovalSection";
import JunkRemovalServiceSection from "./components/JunkRemovalServiceSection";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
