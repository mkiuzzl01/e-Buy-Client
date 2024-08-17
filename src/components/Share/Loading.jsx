import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="absolute loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Loading;
