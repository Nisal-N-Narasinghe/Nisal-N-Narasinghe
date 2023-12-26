import React, { useEffect, useState } from "react";

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const textArray = text.split("");
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += textArray[currentIndex];
      setDisplayedText(currentText);
      currentIndex++;

      if (currentIndex === textArray.length) {
        clearInterval(typingInterval); //stop the anmation when the text is fully displayed
      }
    }, 70);

    return () => {
      clearInterval(typingInterval); //stop the animation when the component is unmounted
    };
  }, [text]);

  return <div>{displayedText}</div>;
};

export default TypingAnimation;
