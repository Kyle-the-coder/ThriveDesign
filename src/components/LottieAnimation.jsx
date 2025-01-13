import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import lottieFile from "../assets/lottieFile.json";

function LottieAnimation({ isHamburgerActive, isAnimationActive }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieFile,
    });
    animRef.current = animation;

    // Cleanup animation on unmount
    return () => animation.destroy();
  }, []);

  useEffect(() => {
    if (!animRef.current) return;

    const { currentFrame } = animRef.current;

    if (!isAnimationActive) {
      animRef.current.playSegments([currentFrame, 0], true); // Play reverse
    } else if (isHamburgerActive) {
      animRef.current.playSegments([0, 43], true); // Play forward
    }
  }, [isHamburgerActive, isAnimationActive]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}

export default LottieAnimation;
