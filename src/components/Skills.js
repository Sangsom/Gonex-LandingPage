import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 25%;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.textRed};
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 100px;
  }

  p {
    margin-top: 50px;
    font-family: ${props => props.theme.pFont};
    color: #9d9d9d;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.667;
  }
`;

const skillList = [
  {
    name: "photography",
    value: 93
  },
  {
    name: "graphic design",
    value: 95
  },
  {
    name: "app",
    value: 75
  },
  {
    name: "programming",
    value: 53
  },
  {
    name: "web",
    value: 84
  }
];

const Skills = () => {
  return (
    <SkillsWrapper>
      <Content>
        <h2>Gonex Statistic</h2>
        <p>
          Dui aliquam quisque. Nec feugiat ut neque odio quo, proin interdum,
          quis elit varius et duis, dui augue vehicula nam tinc.
        </p>
      </Content>

      {skillList.map(({ name, value }, index) => (
        <Skill skill={name} percent={value} key={index} />
      ))}
    </SkillsWrapper>
  );
};

export default Skills;
