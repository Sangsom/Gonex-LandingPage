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
`;

export default function Home() {
  return (
    <Header>
      <Logo>
        <img src="./img/logo_small.png" alt="Gonex Logo" />
      </Logo>
      <NavBar />
    </Header>
  );
}
