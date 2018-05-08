import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 50%;
  background-color: rgba(255, 0, 0, 0.3);
  margin-bottom: 100px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Bar = styled.div`
  background-image: -moz-linear-gradient(
    0deg,
    rgb(86, 197, 83) 1%,
    rgb(248, 82, 82) 99%
  );
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(86, 197, 83) 1%,
    rgb(248, 82, 82) 99%
  );
  background-image: -ms-linear-gradient(
    0deg,
    rgb(86, 197, 83) 1%,
    rgb(248, 82, 82) 99%
  );

  display: flex;
  justify-content: space-between;
  width: ${props => (props.percent ? `${props.percent}%` : "100%")};
  height: 8px;
  border-radius: 10px 0 0 10px;

  span {
    position: relative;
    top: -35px;
    font-family: "Montserrat", sans-serif;
    color: #55565b;
    font-size: 15px;
    text-transform: uppercase;
  }

  span:last-child {
    font-size: 20px;
    top: -40px;
    right: -25px;
    color: #444444;
  }
`;

const Skill = props => {
  return (
    <Container>
      <Bar percent={props.percent}>
        <span>{props.skill}</span>
        <span>{props.percent}%</span>
      </Bar>
    </Container>
  );
};

export default Skill;
