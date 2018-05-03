import React from "react";
import styled from "styled-components";

const SkillBox = styled.div`
  position: relative;
  width: 50%;
  background-color: #ccc;
  margin-bottom: 100px;
`;

const SkillBar = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  width: ${props => (props.percent ? props.percent : "100%")};

  span {
    position: relative;
    top: -45px;
    font-family: "Montserrat", sans-serif;
    color: #55565b;
    font-size: 15px;
    text-transform: uppercase;
  }

  span:last-child {
    font-size: 20px;
    top: -50px;
    right: -30px;
    color: #444444;
  }
`;

const Skill = props => {
  return (
    <SkillBox>
      <SkillBar percent={props.percent}>
        <span>{props.skill}</span>
        <span>{props.percent}</span>
      </SkillBar>
    </SkillBox>
  );
};

export default Skill;
