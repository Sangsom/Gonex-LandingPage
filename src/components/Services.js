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
  height: 865px;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const Services = () => {
  return (
    <ServicesWrapper>
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
