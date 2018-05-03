import styled from "styled-components";

const ServiceBoxBasic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 370px;
  max-height: 300px;
  padding: 75px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 48px;
    font-weight: 400;
    color: #f95353;
    text-transform: uppercase;
    margin: 0;
  }

  h2 {
    font-family: "Lora", serif;
    font-size: 32px;
    color: #605f65;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
  }

  h3 {
    font-family: "Lora", serif;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: #605f65;
  }
`;

export default ServiceBoxBasic;
