import React from "react";
import Button from "./Utility/Button";
import jp from "../Assets/jp.jpg";
import vdim from "../Assets/vadim.jpg";
import nick from "../Assets/nice-houle.jpg";
import mahmud from "../Assets/mahmud.jpg";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="my-32">
      <h2 className="text-center text-purple-700 text-5xl font-bold my-5">
        Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card shadow-xl">
          <figure className="pt-10">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src={jp} alt="" />
              </div>
            </div>
          </figure>
          <div className="card-body text-purple-700">
            <h2 className="card-title">Jp Ivey</h2>
            <h2 className="text-xl">Project Manager</h2>
            <p className="text-white py-4">
              Technical Project Manager for software development. I have a
              Masters in Management, multiple Agile certifications, and
              experience in a wide variety of fields (restaurants,
              manufacturing, military applications, and software). I have been
              involved in multiple crypto projects, both as an analyst and
              investor.
            </p>
            <div className="card-actions">
              <Button
                target="_blank"
                href="https://www.linkedin.com/in/jp-ivey-a1586182/"
              >
                <FaLinkedin></FaLinkedin> Linkedin
              </Button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="pt-10">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src={vdim} alt="" />
              </div>
            </div>
          </figure>
          <div className="card-body text-purple-700">
            <h2 className="card-title">Vadim Race</h2>
            <h2 className="text-xl">Lead developer</h2>
            <p className="text-white py-4">
              Smart contract and back end/full stack web3 developer for
              CryptoCraversLLC. I have experience in working with NI LabView,
              MatLab, Solidity, Java, Python, C++, Objective C, NI Multisim and
              Java Script. I am also a Program Manager for US Acquisitions
              Programs involving data analytics, electronic warfare applications
              and signal analysis.
            </p>
            <div className="card-actions">
              <Button
                target="_blank"
                href="https://www.linkedin.com/in/vadim-race-701229245/"
              >
                <FaLinkedin></FaLinkedin> Linkedin
              </Button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="pt-10">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src={nick} alt="" />
              </div>
            </div>
          </figure>
          <div className="card-body text-purple-700">
            <h2 className="card-title">Nicholas Houle</h2>
            <h2 className="text-xl">Graphics Designer</h2>
            <p className="text-white py-4">
              I've been working with and interested in Cryptocurrencies since
              2012 where I would keep my computer on all night hosting a Bitcoin
              mining software. Unfortunately, like many stories like mine, I
              lost access to the wallet containing my Bitcoin. I have experience
              in smart contract development and crypto investing, but love my
              full-time role as a graphic artist
            </p>
            <div className="card-actions">
              <Button
                target="_blank"
                href="https://www.linkedin.com/in/nicholashoule1/"
              >
                <FaLinkedin></FaLinkedin> Linkedin
              </Button>
            </div>
          </div>
        </div>

        <div className="card shadow-xl">
          <figure className="pt-10">
            <div className="avatar">
              <div className="w-64 rounded-full">
                <img src={mahmud} alt="" />
              </div>
            </div>
          </figure>
          <div className="card-body text-purple-700">
            <h2 className="card-title">Mahmud Hasan</h2>
            <h2 className="text-xl">Web Developer</h2>
            <p className="text-white py-4">
              I've been working with and interested in Cryptocurrencies since
              2012 where I would keep my computer on all night hosting a Bitcoin
              mining software. Unfortunately, like many stories like mine, I
              lost access to the wallet containing my Bitcoin. I have experience
              in smart contract development and crypto investing, but love my
              full-time role as a graphic artist
            </p>
            <div className="card-actions">
              <Button
                target="_blank"
                href="https://www.linkedin.com/in/mahmud-hasan-198a621b8/"
              >
                <FaLinkedin></FaLinkedin> Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
