import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const links = [
  {
    name: "Home",
    href: "#home"
  },
  {
    name: "Services",
    href: "#services"
  },
  {
    name: "Work",
    href: "#work"
  },
  {
    name: "About Us",
    href: "#about"
  },
  {
    name: "Skills",
    href: "#skills"
  },
  {
    name: "Contact",
    href: "#contacts"
  }
];

const Nav = styled.nav`
  display: flex;
  width: 50%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    float: left;
  }

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    li {
      width: 100%;
      text-align: center;
      padding: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

class NavBar extends React.Component {
  state = {
    active: "Home"
  };

  render() {
    return (
      <Nav>
        <ul>
          {links.map((link, index) => (
            <NavItem
              key={index}
              active={this.state.active === link.name ? true : false}
            >
              <a href={link.href}>{link.name}</a>
            </NavItem>
          ))}
        </ul>
      </Nav>
    );
  }
}

export default NavBar;
