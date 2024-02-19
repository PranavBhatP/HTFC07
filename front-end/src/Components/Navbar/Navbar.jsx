import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[15vh] p-[10px] flex flex-row justify-center items-center z-50">
      <div
        className="border-zinc-800 border-2 rounded w-[50%] flex flex-row justify-around items-center p-[12.5px]"
        id="Navbar"
      >
        <Link to="/">
          <h1 id="Navbar_Heading" className="fira-sans-bold text-2xl">
            CryptoniteAI
          </h1>
        </Link>

        <ul className="flex flex-row justify-evenly items-center gap-[15px] border-2 border-zinc-600 px-5 py-2 rounded-3xl">
          {["About", "Features", "Team"].map((item) => {
            return (
              <li className=" fira-sans-extralight text-md">
                <a href={`#${item}`} className="text-white links">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <Link to="/upload">
          <button className="bg-white text-black py-1 px-5 rounded-2xl fira-sans-medium transition duration-300 ease-in-out border-zinc-600 border-2 hover:scale-[115%]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
