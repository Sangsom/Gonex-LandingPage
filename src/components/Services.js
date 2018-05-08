import React from "react";
import styled from "styled-components";
import ServiceBox from "./ServiceBox";
import ServiceBoxBasic from "./ServiceBoxBasic";

const services = [
  {
    name: "Photography",
    description: "Nec feugiat ut neque odio quo, interdum, quis elit varius."
  },
  {
    name: "Graphic Design",
    description: "Nec feugiat ut neque odio quo, interdum, quis elit varius."
  },
  {
    name: "App Development",
    description: "Nec feugiat ut neque odio quo, interdum, quis elit varius."
  },
  {
    name: "Programming",
    description: "Nec feugiat ut neque odio quo, interdum, quis elit varius.",
    primary: true
  },
  {
    name: "Web Coding",
    description: "Nec feugiat ut neque odio quo, interdum, quis elit varius."
  }
];

const ServicesWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 865px;
  padding: 50px;
`;

const ServicesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 370px);
  grid-gap: 30px;
  width: 80%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <ServicesContainer>
        <ServiceBoxBasic>
          <h2>What we do</h2>
          <h1>Best</h1>
          <h3>see it for yourself</h3>
        </ServiceBoxBasic>
        {services.map((service, index) => (
          <ServiceBox key={index} primary={service.primary}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <a href="">See projects</a>
          </ServiceBox>
        ))}
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
