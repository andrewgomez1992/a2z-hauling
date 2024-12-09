import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: #0077c8;
  margin: 10px auto 30px;
`;

const Slider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const Slides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

const Slide = styled.div`
  min-width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 10px;
  text-align: left;

  h3 {
    font-size: 1.2rem;
    color: #0077c8;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }

  span {
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
    display: block;
    margin-top: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#0077c8" : "#ccc")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0077c8;
  }
`;

function Reviews() {
  const reviews = [
    {
      name: "Sarah J.",
      text: "Hometown Hauling A2Z made clearing out my garage so easy! They were quick, professional, and affordable.",
    },
    {
      name: "James B.",
      text: "I highly recommend Hometown Hauling A2Z. Their team was polite and handled everything with care.",
    },
    {
      name: "Emily R.",
      text: "Fantastic service! They showed up on time and left my space spotless. Will use again!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <Section>
      <Title>What Our Customers Say</Title>
      <Underline />
      <Slider>
        <Slides translate={-currentIndex * 100}>
          {reviews.map((review, index) => (
            <Slide key={index}>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
              <span>⭐⭐⭐⭐⭐</span>
            </Slide>
          ))}
        </Slides>
      </Slider>
      <Buttons>
        {reviews.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Buttons>
    </Section>
  );
}

export default Reviews;
