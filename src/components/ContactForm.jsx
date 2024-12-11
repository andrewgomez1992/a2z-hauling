import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding-top: 0px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  background: white;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 1rem; /* Increased from 1rem to 1.5rem */
  color: #000b2a;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Increased from 15px to 20px */
`;

const Input = styled.input`
  padding: 15px; /* Increased from 12px to 15px */
  font-size: 1.1rem; /* Increased from 1rem to 1.1rem */
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #04f7ff;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.5); /* Adjusted color to match teal */
  }
`;

const TextArea = styled.textarea`
  padding: 15px; /* Increased from 12px to 15px */
  font-size: 1.1rem; /* Increased from 1rem to 1.1rem */
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #04f7ff;
    box-shadow: 0 0 5px rgba(0, 128, 128, 0.5); /* Adjusted color to match teal */
  }
`;

const SubmitButton = styled.button`
  padding: 15px; /* Increased from 12px to 15px */
  background-color: #000b2a;
  color: white;
  font-size: 1.3rem; /* Increased from 1.2rem to 1.3rem */
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  &:active {
    transform: scale(0.95);
  }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    // Simulate submission success
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <Section>
      <FormContainer>
        <Title>
          Call <strong>(209) 123-1234</strong> or fill out the form below!
        </Title>
        {isSubmitted ? (
          <p style={{ color: "#04f7ff", fontSize: "1.2rem" }}>
            Thank you! Your message has been sent.
          </p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="How can we help you?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      </FormContainer>
    </Section>
  );
}

export default ContactForm;
