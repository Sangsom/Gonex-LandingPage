import React from "react";
import styled from "styled-components";

/**
 * TODO: Populate with real images
 * TODO: Remove grid gap
 * TODO: Images must cover container
 * TODO: On work item hover - show a text of awesome image and likes
 */

const WorksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 910px;
`;

const WorksContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.textRed};
    font-size: 30px;
    font-weight: 400;
    font-size: 30px;
    margin-top: 80px;
    text-transform: uppercase;
  }

  p {
    font-family: ${props => props.theme.pFont};
    font-size: 13px;
    color: #9d9d9d;
    max-width: 450px;
    text-align: center;
    line-height: 2.308;
  }
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 50px;
`;

const Item = styled.li`
  float: left;
  position: relative;
  padding: 0 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  color: #55565b;

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    position: absolute;
    display: block;
    content: "";
    left: 25%;
    right: 25%;
    bottom: -50%;
    border-bottom: 3px solid #f85252;
  }

  ${props => {
    if (props.active) {
      return `
        &::after {
          position: absolute;
          display: block;
          content: "";
          left: 25%;
          right: 25%;
          bottom: -50%;
          border-bottom: 3px solid #f85252;
        }
      `;
    }
  }};
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(580px, 2fr)
    repeat(2, minmax(275px, 1fr))
    minmax(540px, 1.5fr);

  grid-template-rows: repeat(2, minmax(275px, 1fr));
  grid-gap: 10px;
`;

const ImageItem = styled.div`
  background: #ccc;

  &:first-child {
    grid-row-start: 1;
    grid-row-end: span 2;
  }

  &:last-child {
    grid-column-start: 3;
    grid-column-end: -1;
  }
`;

const Works = () => {
  return (
    <WorksWrapper>
      <WorksContent>
        <h2>Works</h2>
        <p>
          Dui aliquam quisque. Nec feugiat ut neque odio quo, proin interdum,
          quis elit varius et duis, dui augue vehicula nam tinc.
        </p>
        <Navigation>
          <Item active>All</Item>
          <Item>Photography</Item>
          <Item>Graphic Design</Item>
          <Item>App</Item>
          <Item>Programming</Item>
          <Item>Web</Item>
        </Navigation>
      </WorksContent>
      <ImagesContainer>
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </ImagesContainer>
    </WorksWrapper>
  );
};

export default Works;
