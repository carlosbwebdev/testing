import React from "react";
import styles from "../styles/components/VimeoVideo.module.css";
import { useInView } from "react-intersection-observer";

const VimeoVideo = ({ videoId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={styles.videoContainer}>
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
  );
};

export default VimeoVideo;
