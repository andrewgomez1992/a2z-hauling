import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically */
    align-items: center; /* Center sections horizontally */
    text-align: center; /* Center-align text within sections */
    padding: 30px 10px; /* Adjust padding for better spacing */
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #f2f2f2;
    border-bottom: 2px solid #0378ff;
    display: inline-block;
    padding-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #f2f2f2;

    li {
      margin: 8px 0;

      a {
        text-decoration: none;
        color: #f2f2f2;
        transition: color 0.3s;

        &:hover {
          color: #0378ff;
        }
      }
    }
  }

  p {
    margin: 5px 0;
    color: #f2f2f2;

    a {
      color: #f2f2f2;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Sitemap Section */}
      <Section>
        <h3>Sitemap</h3>
        <ul>
          <li>
            <a href="#furniture-removal">Furniture Removal</a>
          </li>
          <li>
            <a href="#appliance-removal">Appliance Removal</a>
          </li>
          <li>
            <a href="#dirt-removal">Dirt Removal</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#locations">Locations</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Section>

      {/* Contact Section */}
      <Section>
        <h3>Contact Us</h3>
        <p>Call or Text:</p>
        <p>
          <a style={{ color: "#0378ff" }} href="tel:2091231234">
            (209) 123-1234
          </a>
        </p>
        <p>
          <a href="#terms">Terms and Conditions</a>
        </p>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
