import React from "react";
import logo from "../Assets/CryptoCraversLogoWhite.png";
import telegram from "../Assets/Telegram_logo.svg.png";
import poocoin from "../Assets/poocoin-poocoin-logo.png";
import pancake from "../Assets/pancakeswap-cake-logo.png";
import discord from "../Assets/discord-mascot.png";
import bsc from "../Assets/BscScan-logo-circle.png";

const Footer = () => {
  return (
    <footer className="footer p-10 backdrop-blur-lg text-neutral-content mt-32">
      <div>
        <img src={logo} className="w-52" alt="" />
        <p>Cryptocravers LLC</p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://t.me/thebeartoken">
            <img src={telegram} className="w-10" alt="" />
          </a>
          <a
            target="_blank"
            href="https://poocoin.app/tokens/0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
          >
            <img src={poocoin} className="w-10" alt="" />
          </a>
          <a
            target="_blank"
            href="https://pancakeswap.finance/swap?outputCurrency=0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
          >
            <img src={pancake} className="w-10" alt="" />
          </a>
          <a
            target="_blank"
            href="https://bscscan.com/address/0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
          >
            <img src={bsc} className="w-10" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
