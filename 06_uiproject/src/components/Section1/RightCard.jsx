import React from "react";
import RightCardTop from "./RightCardTop";
import RightCardBottom from "./RightCardBottom";

const RightCard = (item) => {

  console.log(item)
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0">
      <RightCardTop img={item.img} id={item.id}/>
      <RightCardBottom intro={item.intro} tag={item.tag}/>
    </div>
  );
};

export default RightCard;
