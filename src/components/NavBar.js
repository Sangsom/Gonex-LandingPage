import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const links = [
  {
    name: "Home",
    href: ""
  },
  {
    name: "Services",
    href: ""
  },
  {
    name: "Work",
    href: ""
  },
  {
    name: "About Us",
    href: ""
  },
  {
    name: "Skills",
    href: ""
  },
  {
    name: "Contact",
    href: ""
  }
];

const Nav = styled.nav`
  width: 50%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    float: left;
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
