import React from "react";
import buy from "../Assets/buy-tax.png";
import sell from "../Assets/sell-tax.png";

const Tokenomics = () => {
  return (
    <div className="my-32">
      <div>
        <h2 className="text-center text-purple-700 text-5xl font-bold my-5">
          Tokenomics
        </h2>
        <p className="text-white w-9/12 mx-auto text-center">
          The Bear Token uses a taxation system to fund the treasury and
          maintain a healthy liquidity pool. In addition, there is a burn on
          every sell. The burn will have a deflationary effect on token price,
          in addition to increasing the share of rewards distributed to each
          holder when the treasury is unlocked.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly">
        <img className="lg:w-1/2" src={buy} alt="" />
        <img className="lg:w-1/2" src={sell} alt="" />
      </div>
    </div>
  );
};

export default Tokenomics;
