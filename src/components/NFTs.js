import React from "react";
import nft1 from "../Assets/bear-dream.png";
import nft2 from "../Assets/bear-nft.jpg";
import Button from "./Utility/Button";

const NFTs = () => {
  return (
    <div id="nft">
      <h2 className="text-5xl text-center my-10 text-purple-700 font-bold">
        NFTs
      </h2>
      <div className="carousel w-full rounded-lg min-h-[60vh] overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={nft1}
            className="w-full overflow-hidden object-cover"
            alt=""
          />
          <div className="card absolute flex transform top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl">
            <div className="card-body text-purple-700">
              <h2 className="card-title">The Bear Dreams</h2>
              <p className="text-white hidden lg:block">
                The Bear Dreams collection is a series of unique art releases
                that support The Bear Token. Every NFT is backed by BEAR tokens,
                which will be airdropped to each NFT holder when the treasury is
                distributed. Check back regularly for new offerings.
              </p>
              <div className="card-actions justify-end">
                <Button href="https://boutique.papaexchange.online/collection/the-bear-dreams">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={nft2} alt="" className="w-full object-cover" />
          <div className="card absolute flex transform top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl">
            <div className="card-body text-purple-700">
              <h2 className="card-title">The Bear Token NFT Collection</h2>
              <p className="text-white hidden lg:block">
                The Bear Token NFT Collection is a series of commemorative NFTs
                for the Bear Token project. This NFT collection showcases the
                holder's tenacity, commitment and dedication to the Bear Token
                project.
              </p>
              <div className="card-actions justify-end">
                <Button href="https://boutique.papaexchange.online/collection/the-bear-token-nft-collection">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTs;
