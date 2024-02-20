import React from "react";
import { Link } from "react-router-dom";
const UploadNav = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[12.5vh] p-[10px] flex flex-row justify-center items-center z-[1000000]">
      <div
        className="border-zinc-800 border-2 rounded w-[50%] flex flex-row justify-around items-center p-[12.5px]"
        id="Navbar"
      >
        <Link to="/">
          <h1 id="Navbar_Heading" className="fira-sans-bold text-3xl">
            CryptoniteAI
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default UploadNav;
