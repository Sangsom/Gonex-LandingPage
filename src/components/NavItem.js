import styled from "styled-components";

const NavItem = styled.li`
  a {
    font-family: "Montserrat", sans-serif;
    color: ${props =>
      props.active ? props.theme.linkActiveColor : props.theme.white};
    font-size: ${props => props.theme.linkSize};
    text-transform: uppercase;
    padding: 23px;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  &:hover a {
    color: chocolate;
  }
`;

export default NavItem;
