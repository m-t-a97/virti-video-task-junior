import { useEffect, useRef, useState } from "react";

import styles from "./VideoController.module.css";

function VideoController() {
  const videoRef = useRef(null);

  const [showImageOne, setShowImageOne] = useState<boolean>(false);
  const [showImageTwo, setShowImageTwo] = useState<boolean>(false);
  const [showImageThree, setShowImageThree] = useState<boolean>(false);

  useEffect(() => {
    console.log(videoRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <video className={styles.video} controls ref={videoRef}>
        <source type="video/mp4" src="/Big_Buck_Bunny_1080_10s_5MB.mp4" />
      </video>

      <div className={styles.imageContainer}>
        {showImageOne && (
          <img src="/images/image1.png" className={styles.imageOne} />
        )}

        {showImageTwo && (
          <img src="/images/image2.png" className={styles.imageTwo} />
        )}

        {showImageThree && (
          <img src="/images/image3.png" className={styles.imageThree} />
        )}
      </div>
    </div>
  );
}

export default VideoController;
