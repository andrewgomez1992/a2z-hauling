import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  position: relative;
  height: ${({ height }) => height || "60vh"};
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center
    center/cover;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  color: ${({ color }) => color || "white"};
  padding: 0 50px;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    height: ${({ mobileHeight }) => mobileHeight || "50vh"};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ overlayColor }) =>
    overlayColor || "rgba(0, 11, 42, 0.6)"};
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ maxWidth }) => maxWidth || "800px"};

  h1 {
    font-size: 3rem;
  }
`;

const ReusableOverlaySection = ({
  backgroundImage,
  title,
  subtitle,
  height,
  mobileHeight,
  overlayColor,
  justifyContent,
  textAlign,
  color,
  maxWidth,
}) => {
  return (
    <SectionWrapper
      backgroundImage={backgroundImage}
      height={height}
      mobileHeight={mobileHeight}
      justifyContent={justifyContent}
      textAlign={textAlign}
      color={color}
    >
      <Overlay overlayColor={overlayColor} />
      <Content maxWidth={maxWidth}>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </Content>
    </SectionWrapper>
  );
};

export default ReusableOverlaySection;
