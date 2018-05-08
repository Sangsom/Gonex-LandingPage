import React, { Component } from "react";
import styled from "styled-components";

const VideoWrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  height: 670px;
  background: #324651;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
  }
`;

const VideoContent = styled.section`
  position: absolute;
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
        <video autoPlay loop>
          <source src="./video/video.mov" type="video/mp4" />
        </video>
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
