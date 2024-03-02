import React, { useState, useEffect } from "react";
import LoadingStyles from "./loader.module.css";
// import { Container } from "postcss";

const Loader = ({ triggerComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [delay, setDelay] = useState(200);

  useEffect(() => {
    const updatePercentage = () => {
      if (percentage < 100 && !triggerComplete) {
        setPercentage(percentage + 1); // Increment percentage
        setDelay((prev) => prev + 7); // Increase delay for next iteration
      } else if (triggerComplete) {
        setPercentage(100); // Immediately complete if triggerComplete is true
      }
    };

    if (percentage < 100 && !triggerComplete) {
      const timeoutId = setTimeout(updatePercentage, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [percentage, delay, triggerComplete]);

  return (
    <div className={LoadingStyles.loaderbackdrop}>
      <div className={LoadingStyles.loader}></div>
      <div className={LoadingStyles.loadertext}>Loading</div>

      {/* <div>
        {currentState === "loading" && "Loading"}
        {currentState === "executing" && "Executing"}
        {currentState === "converting" && "Converting"}
        {currentState === "completed" && "Completed"}: {percentage}%
      </div> */}
    </div>
  );
};

export default Loader;
