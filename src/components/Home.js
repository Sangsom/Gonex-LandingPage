import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  background: #161718;
  height: 85px;
  transition: all 0.5s;

  @media (max-width: 1200px) {
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    min-height: 85px;
    padding: 20px;
  }
`;

export default function Home() {
  return (
    <Header id="home">
      <Logo>
        <img src="./img/logo_small.png" alt="Gonex Logo" />
      </Logo>
      <NavBar />
    </Header>
  );
}
