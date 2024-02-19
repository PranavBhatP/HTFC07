import React from "react";

import Navbar from "../../Components/Navbar/Navbar";

import Folder from "./Folder.webp";

const Upload = () => {
  return (
    <div className="bg-[#120624]">
      <Navbar></Navbar>
      <div className="min-h-screen relative overflow-hidden">
        <div className="w-[80%] h-[70%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-zinc-700 rounded-2xl">
          <div className="w-[97.5%] h-[95%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-zinc-800 rounded-2xl">
            <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
              <h className="fira-sans-medium text-[3.5rem] text-white">
                Upload Your XML
              </h>
              <p className="text-gray-500 antialiased text-[1.75rem]">
                Fast and Easy Way
              </p>
              <img src={Folder} alt="" className="scale-[80%]" />
              <button className="text-white py-3 px-5 border-2 border-zinc-600 rounded">
                Upload Your File
              </button>
              <p className="text-gray-500 antialiased text-sm mt-2">
                Check out the XML Format Below!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative overflow-hidden">
        <div className="w-[40%] h-[70%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-zinc-700 rounded-2xl flex flex-col justify-evenly items-start source-code-medium text-white font-xl p-10">
          <h1 className="fira-sans-medium text-3xl self-center">
            XML File Format
          </h1>
          <p className="text-white">
            {`<?`}
            <span className="text-red-400">xml</span>{" "}
            <span className="text-green-400">version</span>=
            <span className="text-yellow-200">{`"1.0"`}</span>{" "}
            <span className="text-green-400">encoding</span>=
            <span className="text-yellow-200">{`"UTF-8"`}</span>
            {`>`}
          </p>
          <p className="text-red-400">{`<Organisation></Organisation>`}</p>
          <p className="text-red-400">{`<Technologies>`}</p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;{`<Technology></Technology>`}
          </p>
          <p className="text-red-400">{`</Technologies>`}</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
