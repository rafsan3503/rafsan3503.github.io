import React from "react";
import logo from "../Assets/main-logo.png";
import Button from "./Utility/Button";

const Banner = () => {
  return (
    <div id="home">
      <div className="hero mt-36 text-purple-700">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={logo} className="w-96 mx-auto" alt="" />
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Beat The Market</h1>
            <p className="py-6 text-white">
              The Bear Token ($BEAR) is a Binance Smart Chain rewards token
              designed to grow your money through the Crypto slump. Our unique
              treasury wallet will "Buy the Dip" to optimize maximum growth
              during the bear market.
            </p>

            <Button target="_blank" href="http://t.me/thebeartoken">
              Join Telegram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
