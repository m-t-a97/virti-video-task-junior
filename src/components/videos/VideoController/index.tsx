import { useEffect, useRef, useState } from "react";

import classnames from "classnames";

import styles from "./VideoController.module.css";

function VideoController() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showImageOne, setShowImageOne] = useState<boolean>(false);
  const [imageOneDisplayCount, setImageOneDisplayCount] = useState<number>(0);

  const [showImageTwo, setShowImageTwo] = useState<boolean>(false);
  const [imageTwoDisplayCount, setImageTwoDisplayCount] = useState<number>(0);

  const [showImageThree, setShowImageThree] = useState<boolean>(false);
  const [imageThreeDisplayCount, setImageThreeDisplayCount] =
    useState<number>(0);

  useEffect(() => {
    videoRef.current!.ontimeupdate = onVideoTimeUpdate;
  });

  const onVideoTimeUpdate = (): void => {
    const currentTime = Math.round(videoRef.current!.currentTime * 10) / 10;
    renderImageOne(currentTime);
    renderImageTwo(currentTime);
    renderImageThree(currentTime);
  };

  const renderImageOne = (currentTime: number): void => {
    if (currentTime >= 3.5 && currentTime <= 8.5) {
      if (!showImageOne && imageOneDisplayCount <= 0) {
        setShowImageOne(true);
        setImageOneDisplayCount(imageOneDisplayCount + 1);
      }
    } else {
      setShowImageOne(false);
    }
  };

  const renderImageTwo = (currentTime: number): void => {
    if (currentTime >= 6 && currentTime <= 8) {
      if (!showImageTwo && imageTwoDisplayCount < 2) {
        setShowImageTwo(true);
        setImageTwoDisplayCount(imageTwoDisplayCount + 1);
      }
    } else {
      setShowImageTwo(false);
    }
  };

  const renderImageThree = (currentTime: number): void => {
    if (currentTime >= 7 && currentTime <= 8.5) {
      if (!showImageThree && imageThreeDisplayCount < 3) {
        setShowImageThree(true);
        setImageThreeDisplayCount(imageThreeDisplayCount + 1);
      }
    } else {
      setShowImageThree(false);
    }
  };

  const onPlayVideo = (): void => {
    videoRef.current!.play();
  };

  const onPauseVideo = (): void => {
    videoRef.current!.pause();
  };

  const onRewindVideoByFiveSeconds = (): void => {
    if (videoRef.current!.duration >= 5 && videoRef.current!.currentTime >= 5) {
      videoRef.current!.currentTime -= 5;
    }
  };

  const onForwardVideoByFiveSeconds = (): void => {
    if (videoRef.current!.currentTime <= videoRef.current!.duration - 5) {
      videoRef.current!.currentTime += 5;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video controls className={styles.video} ref={videoRef}>
          <source type="video/mp4" src="/Big_Buck_Bunny_1080_10s_5MB.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.imageContainer}>
          <img
            src="/images/image1.png"
            className={classnames(
              styles.imageOne,
              {
                [styles.displayImage]: showImageOne,
              },
              {
                [styles.hideImage]: !showImageOne,
              }
            )}
          />

          <img
            src="/images/image2.png"
            className={classnames(
              styles.imageTwo,
              {
                [styles.displayImage]: showImageTwo,
              },
              {
                [styles.hideImage]: !showImageTwo,
              }
            )}
          />

          <img
            src="/images/image3.png"
            className={classnames(
              styles.imageThree,
              {
                [styles.displayImage]: showImageThree,
              },
              {
                [styles.hideImage]: !showImageThree,
              }
            )}
          />
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          type="button"
          className={classnames(
            styles.videoControllerButton,
            styles.videoControllerButtonOne
          )}
          onClick={onPlayVideo}
        >
          Play/Resume
        </button>

        <button
          type="button"
          className={classnames(
            styles.videoControllerButton,
            styles.videoControllerButtonTwo
          )}
          onClick={onPauseVideo}
        >
          Pause
        </button>

        <button
          type="button"
          className={classnames(
            styles.videoControllerButton,
            styles.videoControllerButtonThree
          )}
          onClick={onRewindVideoByFiveSeconds}
        >
          Rewind (-5)
        </button>

        <button
          type="button"
          className={classnames(
            styles.videoControllerButton,
            styles.videoControllerButtonFour
          )}
          onClick={onForwardVideoByFiveSeconds}
        >
          Forward (+5)
        </button>
      </div>
    </div>
  );
}

export default VideoController;
