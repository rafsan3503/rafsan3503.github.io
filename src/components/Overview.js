import React from "react";
import Button from "./Utility/Button";

const Overview = () => {
  return (
    <div id="overview">
      <div className="hero mt-32 text-purple-700">
        <div className="flex justify-evenly flex-col lg:flex-row">
          {/* <img src={bear} className="w-96" alt="" /> */}
          <div className="lg:w-9/12 mx-auto p-5 shadow-lg rounded-lg">
            <h1 className="text-5xl font-bold">Overview</h1>
            <p className="py-8 text-white">
              Welcome to the Bear Token community. Investing in crypto is both
              exciting and rewarding. However, the recent market slump has
              resulted in huge losses, forcing investors to reconsider their
              investment strategies. The Bear Token team wants to take rewards
              tokens in a new direction—a smarter direction. Crypto winter is
              fast-approaching, investors must band together until the next
              alt-coin season. Rather than offering short-term rewards, the Bear
              Token will utilize transaction taxes to build a cross-chain
              treasury. As the market finds a floor, the Bear Token treasury
              will be spent buying up tokens at rock-bottom prices. Investors
              will have the opportunity to decide which tokens will offer the
              best rewards over the coming year. Once the bear token has stored
              up for the winter, the community will go into hibernation until
              winters’ end. We will have a Groundhog Day event to evaluate
              winters’ end and to vote on the correct date to unlock the
              treasury. When the treasury is finally unlocked, all investments
              in the treasury will be converted to BUSD and distributed evenly
              amongst all Bear Token holders.
            </p>
            <Button
              target="_blank"
              href="https://pancakeswap.finance/swap?outputCurrency=0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
