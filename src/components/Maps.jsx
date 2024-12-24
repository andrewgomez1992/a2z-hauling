import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const MapsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const MapCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
`;

const MapTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px;
  color: #0077c8;
`;

const MapDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  padding: 10px 20px;
  text-align: center;
`;

function MapComponent() {
  const routeLocation = useLocation(); // Get the current route

  const locations = [
    {
      name: "Modesto",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32023.646247464394!2d-121.0014482!3d37.6390972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80906d48b9b25eab%3A0x4b019a79f80f26c3!2sModesto%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1696774557183!5m2!1sen!2s",
      description:
        "In Modesto, Hometown Hauling A2Z is your go-to solution for fast, reliable junk removal. We take pride in keeping your home and community clean, giving you back the space you deserve without the stress.",
    },
    {
      name: "Stockton",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32023.646247464394!2d-121.3010592!3d37.9577016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80905e6c016bae99%3A0x4b019a79f80f26c3!2sStockton%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1696774557183!5m2!1sen!2s",
      description:
        "In Stockton, we’re committed to making junk removal quick and hassle-free. From bulky furniture to everyday clutter, Hometown Hauling A2Z ensures your space is left spotless and stress-free.",
    },
    {
      name: "Turlock",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.2530377497656!2d-120.8433612!3d37.4942313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809105d55bffb34f%3A0x81d3c7554aa4f966!2sTurlock%2C%20CA%2095771%2C%20USA!5e0!3m2!1sen!2s!4v1696774557183!5m2!1sen!2s",
      description:
        "In Turlock, Hometown Hauling A2Z provides dependable and affordable junk removal services. Our team ensures every haul is quick, clean, and professional, helping you reclaim your space without lifting a finger.",
    },
  ];

  return (
    <Section>
      <Title>Our Service Areas</Title>
      <MapsContainer>
        {locations.map((loc, index) => (
          <MapCard key={index}>
            <MapTitle>{loc.name}</MapTitle>
            <iframe
              src={loc.embedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={loc.name}
            ></iframe>
            {/* Show description only if on /locations */}
            {routeLocation.pathname === "/locations" && (
              <MapDescription>{loc.description}</MapDescription>
            )}
          </MapCard>
        ))}
      </MapsContainer>
    </Section>
  );
}

export default MapComponent;
