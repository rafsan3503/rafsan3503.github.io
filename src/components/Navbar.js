import React, { useState } from "react";
import Button from "./Utility/Button";
import logo from "../Assets/logo.png";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = (
    <>
      <li>
        <a
          href="#home"
          aria-label="Our product"
          title="Home"
          class="font-medium tracking-wide text-white text-lg duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 hover:text-purple-200"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#overview"
          aria-label="Our product"
          title="Overview"
          class="font-medium tracking-wide text-white text-lg duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 hover:text-purple-200"
        >
          Overview
        </a>
      </li>
      <li>
        <a
          href="#nft"
          aria-label="Our product"
          title="Utility"
          class="font-medium tracking-wide text-white text-lg duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 hover:text-purple-200"
        >
          NFTs
        </a>
      </li>
      <li>
        <a
          href="#utility"
          aria-label="Our product"
          title="Utility"
          class="font-medium tracking-wide text-white text-lg duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 hover:text-purple-200"
        >
          Utility
        </a>
      </li>
      <li>
        <a
          href="#roadmap"
          aria-label="Our product"
          title="Roadmap"
          class="font-medium tracking-wide text-white text-lg duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 hover:text-purple-200"
        >
          Roadmap
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Team"
          class="font-medium tracking-wide duration-200 transform hover:border-b-4 hover:border-b-cyan-300 transition delay-150 text-white text-lg hover:text-purple-200"
        >
          Our Team
        </a>
      </li>
    </>
  );
  return (
    <div>
      <div class="px-4 py-5 fixed top-0 bg-transparent container z-10 backdrop-blur-md">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img src={logo} className="w-16" alt="" />
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <Button target="_blank" href="http://beartokenapp.com/">
              Open App
            </Button>

            <Button
              target="_blank"
              href="https://pancakeswap.finance/swap?outputCurrency=0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
            >
              Buy Now
            </Button>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaPaw className="text-purple-700 text-2xl" />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-black border border-purple-700 rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <img src={logo} className="w-16" alt="" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {menuItems}
                      <li>
                        <Button target="_blank" href="http://beartokenapp.com/">
                          Open App
                        </Button>
                        <Button
                          target="_blank"
                          href="https://pancakeswap.finance/swap?outputCurrency=0xd1421f138fd1bca936c1c4b2ccc80fc133372e77"
                        >
                          Buy Now
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
