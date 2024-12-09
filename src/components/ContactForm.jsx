import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #008080;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #008080;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #008080;
  color: white;
  font-size: 1.2rem;
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

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const response = await fetch("https://formspree.io/f/your-form-id", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setIsSubmitted(true);
  //       setFormData({ name: "", phone: "", email: "", message: "" });
  //     } else {
  //       alert("Failed to send the message.");
  //     }
  //   };

  return (
    <Section>
      <FormContainer>
        <Title>
          Call <strong>(209) 123-1234</strong> or fill out the form below!
        </Title>
        {isSubmitted ? (
          <p style={{ color: "#008080", fontSize: "1.2rem" }}>
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
