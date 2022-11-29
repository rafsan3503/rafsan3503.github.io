import React from "react";
import roadmap from "../Assets/roadmap.png";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <h2 className="text-5xl text-purple-700 text-center my-10 font-bold">
        Roadmap
      </h2>
      <img src={roadmap} alt="" />
    </div>
  );
};

export default Roadmap;
