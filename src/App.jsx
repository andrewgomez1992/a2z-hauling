import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import ContactUs from "./pages/ContactUs";
import AutoScrollToTop from "./util/AutoScrollToTop";

function App() {
  return (
    <Router>
      <AutoScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />{" "}
        <Route path="/contact-us" element={<ContactUs />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
