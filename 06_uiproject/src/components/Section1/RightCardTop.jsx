import React from "react";

const RightCardTop = (item) => {
  return (
    <div>
      <img
        className="h-full w-full object-cover"
        src={item.img}
        alt="wf"
      />
      <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">
          {item.id}
        </h2>
      </div>
    </div>
  );
};

export default RightCardTop;
