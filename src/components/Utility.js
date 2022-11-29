import React from "react";

const Utility = () => {
  return (
    <div id="utility">
      <h2 className="text-center text-purple-700 text-5xl font-bold my-5">
        Utility
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card shadow-xl text-purple-700">
          <div className="card-body">
            <h2 className="card-title">Sustainable Token Value</h2>
            <p className="text-white">
              The Bear Token economy is built around a locked treasury. This
              means, investors have a reason to hold. If you sell your tokens,
              you are giving up your share of the treasury when it is unlocked.
              As the treasury grows, the demand for token will increase—driving
              up the token price. This system will ensure that the price of the
              token continues to increase until the treasury finally unlocks and
              rewards are distributed.
            </p>
          </div>
        </div>

        <div className="card shadow-xl text-purple-700">
          <div className="card-body">
            <h2 className="card-title">Building the Treasury</h2>
            <p className="text-white">
              The treasury will be built through the 4% tax on all buys and
              sells. As the amount of funds grow, the treasury will make
              investments in crypto tokens across multiple chains. Members of
              the Bear Token community will be given opportunity to vote on
              which currencies to spend the treasury on. The intent is to
              purchase tokens as they hit the market floor. As this is
              impossible to predict, the treasury will be spent using a DCA
              (Dollar Cost Average) approach, to ensure the best possible value
              for the treasury.
            </p>
          </div>
        </div>

        <div className="card shadow-xl text-purple-700">
          <div className="card-body">
            <h2 className="card-title">Hibernation</h2>
            <p className="text-white">
              After multiple rounds of investments have been made, the treasury
              will go into hibernation for the remainder of crypto winter. The
              4% tax will continue to be deposited in the treasury, but no
              further investments will be made into other tokens. As crypto
              winter nears its end, there will be a Groundhog Day event, where
              the community collectively assesses the market and votes on the
              date to unlock the treasury.
            </p>
          </div>
        </div>

        <div className="card shadow-xl text-purple-700">
          <div className="card-body">
            <h2 className="card-title">Unlocking the Treasury</h2>
            <p className="text-white">
              On the day the community decides, all investments made by the
              treasury will be converted to BUSD and distributed evenly amongst
              all Bear Token holders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
