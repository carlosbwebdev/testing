import React, { useState, useEffect } from "react";
import styles from "../styles/components/VimeoVideo.module.css";
import VisibilitySensor from "react-visibility-sensor";

const VimeoVideo = ({ videoId }) => {
  const [inView, setInView] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      minTopValue={50}
      onChange={(isVisible) => {
        setInView(isVisible);
      }}
    >
      <div className={styles.videoContainer}>
        {inView ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=0&autopause=0&muted=1&controls=0&repeat=1`}
            frameBorder="0"
            allow="autoplay; picture-in-picture "
            allowFullScreen
          ></iframe>
        ) : (
          ""
        )}
      </div>
    </VisibilitySensor>
  );
};

export default VimeoVideo;
