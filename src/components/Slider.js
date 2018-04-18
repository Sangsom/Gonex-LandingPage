import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SliderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 720px;
  text-align: center;
  background: #123f46;
  background-image: url("./img/slider-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-family: ${props => props.theme.h1Font};
    font-size: ${props => props.theme.h1Size};
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.textRed};
  }

  p {
    font-family: ${props => props.theme.pFont};
    font-size: ${props => props.theme.pSize};
    color: ${props => props.theme.textWhite};
    line-height: 2;
    width: 600px;
    margin-bottom: 50px;
  }
`;

const Slider = () => {
  return (
    <SliderWrapper>
      <h1>We are gonex</h1>
      <p>
        Dui aliquam quisque. Nec feugiat ut neque odio quo, proin interdum, quis
        elit varius et duis, dui augue vehicula nam tinc.
      </p>
      <Button>Show me more</Button>
    </SliderWrapper>
  );
};

export default Slider;
