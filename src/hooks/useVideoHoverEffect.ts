import { useEffect } from "react";

function useVideoHoverEffect() {
  useEffect(() => {
    const video = document.querySelector("#video");
    video?.addEventListener("mouseenter", onEnterHoverVideo);
    video?.addEventListener("mouseleave", onLeaveHoverVideo);

    return () => {
      video?.removeEventListener("mouseenter", onEnterHoverVideo);
      video?.removeEventListener("mouseleave", onLeaveHoverVideo);
    };
  }, []);

  const onEnterHoverVideo = (): void => {
    document.querySelector("body")?.classList.add("alternate-background");
  };

  const onLeaveHoverVideo = (): void => {
    document.querySelector("body")?.classList.remove("alternate-background");
  };
}

export default useVideoHoverEffect;
