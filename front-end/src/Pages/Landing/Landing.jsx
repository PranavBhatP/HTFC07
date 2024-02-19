import React from "react";

import Hero from "./Hero_Photo.png";
// import Mouse from "./Mouse_Scroll.png";
import Feature_1 from "./Feature_Art_1.png";
import Security from "./Security.png";

import { Sun } from "react-feather";
import { Crosshair } from "react-feather";

import Navbar from "../../Components/Navbar/Navbar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Footer from "../../Components/Footer/Footer";

import { Link } from "react-router-dom";
const icons = [
  <Sun className="icon"></Sun>,
  <Crosshair className="icon section"></Crosshair>,
];

const Section = ({ Title, Paragraph, Icon }) => {
  return (
    <>
      <div className="flex flex-col justify-evenly w-[50%]">
        <div className="flex flex-row justify-start items-center gap-[15px]">
          {icons[Icon]}
          <h1 className="text-white text-[1.5rem] fira-sans-medium">{Title}</h1>
        </div>
        <p className="antialiased text-gray-500 w-[87.5%] self-end">
          {Paragraph}
        </p>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="h-screen overflow-hidden relative" id="About">
        <div className="absolute inset-x-1/2 inset-y-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-row justify-evenly items-center w-[85%] h-[50%] gap-px">
          <div className="flex flex-col justify-center align-start w-[70%] gap-[20px]">
            <div className="flex flex-col justify-center align-start w-[100%]">
              <h2 className="text-white fira-sans-medium text-[2.75rem]">
                Your Cryptonite For
              </h2>
              <h1
                className="text-white fira-sans-medium text-[4.5rem]"
                id="Hero_Heading"
              >
                Everything Vulnerable
              </h1>
            </div>
            <p className="text-gray-500 antialiased text-lg">
              Protect yourself from even the most advanced and nascent attack
              vectors with our state-of-the-art prediction mechanism. Want to
              check out your risk? Get started with us now!
            </p>
            <Link to="/upload">
              <button className="bg-[#EAEBED] w-[35%] p-5 rounded fira-sans-bold text-black bg-white text-black my-2 hover:scale-[105%] transition duration-300 ease-in-out text-xl">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center overflow-hidden">
            <img src={Hero} alt="" className="scale-[125%]" />
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureSection = () => {
  return (
    <>
      <div className="h-[80vh] overflow-hidden relative" id="Features">
        <div className="flex flex-row w-[90%] h-[95%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 justify-evenly items-center">
          <div className="flex flex-row justify-center items-center w-[50%]">
            <img
              src={Feature_1}
              alt=""
              className="w-[612px] h-[408px] scale-[110%]"
            />
          </div>
          <div className="flex flex-col justify-evenly align-start w-[50%] gap-[15px]">
            <h2 className="text-white fira-sans-medium text-[3.5rem]">
              Tackling Modern<br></br>Security Threats
            </h2>
            <p className="text-gray-500 antialiased text-lg">
              In today's cyber-driven world, the increasing number of
              vulnerabilities in existing softwares put enterprises at a huge
              risk of being hacked. That is where, we step in!
            </p>
            <div className="bg-gradient-to-r from-[#0D0A25] to-[#1E0A2D] rounded border-2 border-zinc-800 p-[20px] shadow-md">
              <div className="flex flex-row justify-start items-center gap-[7px]">
                {icons[0]}
                <h3 className="text-white fira-sans-medium text-[1.25rem]">
                  Impact to Business
                </h3>
              </div>
              <p className="text-gray-500 antialiasted text-md my-2">
                Cybersecurity breaches can have sever impacts on businesses.
                They can result in financial issues due to stolen funds and
                operational disruptions, as well as damage a company's
                reputation, leading to a loss of customer trust and decreased
                sales.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-evenly items-center gap-[30px] p-[20px]">
                <Section
                  Title={"Alarming Statistics"}
                  Paragraph={"1 in 4.5MB's is the victim of a cyberattack"}
                  Icon={1}
                ></Section>
                <Section
                  Title={"Alarming Statistics"}
                  Paragraph={
                    "91% of cyberattacks begin with phishing email messages."
                  }
                  Icon={1}
                ></Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ExplanationSection = () => {
  return (
    <>
      <div className="h-[70vh] overflow-hidden relative">
        <div className="flex flex-row justify-evenly items-center w-[80%] h-[90%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[60%] flex flex-col justify-evenly items-start gap-[10px]">
            <h2 className="text-white fira-sans-medium text-[3.5rem]">
              Comprehensive Security To <br></br>Protect Your Business
            </h2>
            <p className="text-gray-500 antialiased text-lg">
              Our state-of-the-art SaaS website uses complex AI models paired
              with fundamental concepts in mathematics in order to predict
              vulnerabilities, along with their impacts on businesses.
            </p>
            <p className="text-gray-500 antialiased text-lg">
              Our state-of-the-art SaaS website uses complex AI models paired
              with fundamental concepts in mathematics in order to predict
              vulnerabilities, along with their impacts on businesses.
            </p>
          </div>
          <div className="w-[40%] flex flex-row justify-evenly items-center">
            <img src={Security} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

const Landing = () => {
  return (
    <>
      <div className="bg-[#120624]">
        <ProgressBar></ProgressBar>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <ExplanationSection></ExplanationSection>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Landing;
