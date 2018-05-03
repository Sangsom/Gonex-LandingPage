import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 950px;
  background-color: #324651;
  background-image: url("./img/about-us.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Content = styled.div`
  text-align: center;
  max-width: 50%;
  margin-top: 100px;

  h2 {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.textRed};
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 50px;
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.textWhite};
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    margin-top: 50px;
    font-family: ${props => props.theme.pFont};
    color: ${props => props.theme.textWhite};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.667;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Content>
        <h2>About Us</h2>
        <h3>Some simple word about our company</h3>
        <p>
          Ad graeci omnium minimum sit, augue discere complectitur est te. Mea
          expetenda intellegebat no, reque signiferumque qui te, ad denique
          omittam mei. Veri numquam inciderint pri ad, saepe essent ut sea, nam
          ei civibus denique eleifend. Dicat pertinax ut vix, mazim platonem ea
          has. Partiendo intellegam ex eos, eos putant alienum ea. Ut malorum
          ponderum vituperata eum.
        </p>
      </Content>
    </AboutWrapper>
  );
};

export default About;
