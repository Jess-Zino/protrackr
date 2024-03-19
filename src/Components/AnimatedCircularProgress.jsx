import React, { useState, useEffect } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const AnimatedCircularProgress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === value) {
          clearInterval(interval);
          return value;
        } else {
          return Math.min(prevProgress + 1, value);
        }
      });
    }, 20); // Adjust the interval to control animation speed

    return () => clearInterval(interval);
  }, [value]);

  return (
    <CircularProgress
      value={progress} size='70px' thickness='10px' color="#A982E7" className="circular-progress"
    >
      <CircularProgressLabel>{progress}%</CircularProgressLabel>
    </CircularProgress>
  );
};

export default AnimatedCircularProgress;
