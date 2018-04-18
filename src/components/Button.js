import styled from "styled-components";

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #ffffff;
  border: none;
  background: #56c553;
  text-transform: uppercase;
  padding: 14px 50px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    color: chocolate;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default Button;
