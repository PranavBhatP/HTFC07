import React from "react";
import { GitHub, Target } from "react-feather";

const Footer = () => {
  return (
    <div className="w-[90%] h-[15vh] flex flex-row justify-between items-center relative gap-[20px] inset-x-1/2 -translate-x-1/2 px-[20px] border-t-2 border-zinc-800">
      <h1 id="Footer_Heading">CryptoniteAI © </h1>
      <div className="text-gray-500 antialiased">
        Made with ❤️ by FullStackSlayers
      </div>
      <a href="https://github.com/PranavBhatP/HTFC07" target="__blank">
        <GitHub id="GitHubLogo"></GitHub>
      </a>
    </div>
  );
};

export default Footer;
