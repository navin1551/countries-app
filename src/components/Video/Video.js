import React from "react";
import "./Video.css";

const Video = props => {
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  console.log(props.video.id.videoId);

  return (
    <div id="video-container">
      <iframe src={videoSrc} />
    </div>
  );
};

export default Video;
