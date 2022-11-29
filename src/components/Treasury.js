import React, { useState } from "react";
import Countdown from "react-countdown";

const Treasury = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex flex-wrap justify-center gap-6 text-center auto-cols-max">
          <div className="flex flex-col p-4 bg-purple-700 rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{days}</span>
            </span>
            days
          </div>
          <div className="flex flex-col p-4 bg-purple-700 rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{hours < 10 ? "0" + hours : hours}</span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-4 bg-purple-700 rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{minutes < 10 ? "0" + minutes : minutes}</span>
            </span>
            min
          </div>
          <div className="flex flex-col p-4 bg-purple-700 rounded-box text-neutral-content">
            <span className="font-mono text-5xl">
              <span>{seconds < 10 ? "0" + seconds : seconds}</span>
            </span>
            sec
          </div>
        </div>
      );
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-3xl text-white font-bold text-center py-10">
        Treasury Will Unlock In...
      </h2>
      <Countdown date={Date.now() + 12816248313} renderer={renderer} />
    </div>
  );
};

export default Treasury;
