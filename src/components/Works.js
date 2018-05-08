import React from "react";
import styled from "styled-components";

/**
 * TODO: On work item hover - show a text of awesome image and likes
 */

const WorksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 910px;
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

    @media (max-width: 768px) {
      width: 80%;
    }
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

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 5px;
    margin-left: 10%;
    background: #f85252;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 10px;
  }

  ${props => {
    if (props.active) {
      return `
        &::after {
          display: block;
          width: 80%;
          height: 2px;
          margin-top: 5px;
          margin-left: 10%;
          margin-left: 10%;
          background: #f85252;
        }
      `;
    }
  }};
`;

const ImagesContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  padding-top: 20px;

  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 275px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 175px;
  }
`;

const ImageItem = styled.div`
  position: relative;
  overflow: hidden;

  &:first-child {
    grid-row: 1 / span 2;
  }

  &:last-child {
    grid-column: 3 / -1;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1640px) {
    &:first-child {
      grid-row: auto;
    }

    &:last-child {
      grid-column: auto;
    }
  }
`;

const images = [
  {
    name: "Work 1",
    path: "work-1.jpg"
  },
  {
    name: "Work 2",
    path: "work-2.jpg"
  },
  {
    name: "Work 3",
    path: "work-3.jpg"
  },
  {
    name: "Work 4",
    path: "work-4.jpg"
  },
  {
    name: "Work 5",
    path: "work-5.jpg"
  },
  {
    name: "Work 6",
    path: "work-6.jpg"
  }
];

const Works = () => {
  return (
    <WorksWrapper id="work">
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
        {images.map(({ name, path }, index) => (
          <ImageItem key={index}>
            <img src={`./img/${path}`} alt={name} />
          </ImageItem>
        ))}
      </ImagesContainer>
    </WorksWrapper>
  );
};

export default Works;
