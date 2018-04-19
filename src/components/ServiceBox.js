import React from "react";
import styled from "styled-components";

const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 370px;
  max-height: 300px;
  background: ${props => (props.primary ? "#56c553" : "#f7f7f7")};
  padding: 75px;
  text-align: center;

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${props => (props.primary ? props.theme.textWhite : "#605f65")};
  }

  p {
    font-family: "Lora", serif;
    font-size: 15px;
    color: ${props => (props.primary ? props.theme.textWhite : "#9d9d9d")};
    margin-bottom: 40px;
  }

  a {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    color: ${props => (props.primary ? props.theme.textWhite : "#f95353")};
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

export default ServiceBox;
