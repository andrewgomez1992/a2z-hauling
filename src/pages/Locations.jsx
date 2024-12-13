import React from "react";
import MapComponent from "../components/Maps";
import Footer from "../components/Footer";

const Locations = () => {
  return (
    <div>
      {/* Your Locations content goes here */}
      <h1>Our Locations</h1>
      <p>Find us at the following locations:</p>
      <MapComponent />
      {/* Add more content as needed */}
      <Footer />
    </div>
  );
};

export default Locations;
