import React, { useEffect, useState } from "react";
import "../../../styles/FlyinInText.css";

const FlyinInText = ({ textNoraml, textExtraBold }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationClass("fly-in");
    }, 10);

    //cleanup on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`${animationClass}`}>
      <span className='font-normal '>{textNoraml}</span>
      <span className='font-extrabold '>{textExtraBold}</span>
    </div>
  );
};

export default FlyinInText;
