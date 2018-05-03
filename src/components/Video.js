import React, { Component } from "react";
import styled from "styled-components";

const VideoWrapper = styled.section`
  display: flex;
  height: 670px;
  background: #324651;
  justify-content: center;
  align-items: center;
`;

const VideoContent = styled.section`
  text-align: center;

  h2 {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.textRed};
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
  }

  p {
    font-family: ${props => props.theme.pFont};
    color: ${props => props.theme.textWhite};
  }
`;

/**
 * TODO: Create a video to show
 * TODO: Create a video player control buttons
 */

class Video extends Component {
  render() {
    return (
      <VideoWrapper>
        <VideoContent>
          <img src="./img/logo_video.png" alt="" />
          <h2>Show me the video</h2>
          <p>Just hit play and relax...</p>
        </VideoContent>
      </VideoWrapper>
    );
  }
}

export default Video;
