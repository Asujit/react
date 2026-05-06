import React from "react";
import "remixicon/fonts/remixicon.css";
import LeftHero from "./LeftHero";
import LeftArrow from "./LeftArrow";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
        <LeftHero/>
        <LeftArrow/>
    </div>
  );
};

export default LeftContent;
