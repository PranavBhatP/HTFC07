import React from "react";
import { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

import Folder from "./Folder.webp";

import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState();

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FileUpload", file);

    const result = await axios.post(
      "http://localhost:6001/models/coefficients",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(result);
  };

  return (
    <div className="bg-[#120624]">
      <ProgressBar></ProgressBar>
      <div className="min-h-screen relative overflow-hidden">
        <div className="w-[80%] h-[80%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-zinc-700 rounded-2xl">
          <div className="w-[97.5%] h-[95%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-zinc-800 rounded-2xl">
            <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
              <h1 className="fira-sans-medium text-[3.5rem] text-white">
                Upload Your JSON
              </h1>
              <p className="text-gray-500 antialiased text-[1.75rem]">
                Fast and Easy Way
              </p>
              <img src={Folder} alt="" className="scale-[80%]" />
              <form
                action=""
                className="flex flex-col justify-evenly items-center gap-5"
              >
                <input
                  type="file"
                  accept=".json"
                  name="FileUpload"
                  id="FileUpload"
                  className="text-white py-3 px-5 border-2 border-zinc-600 rounded flex flex-row"
                  onChange={onInputChange}
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white py-3 px-5 border-2 border-zinc-600 rounded flex flex-row"
                >
                  Run Model :D
                </button>
              </form>

              <p className="text-gray-500 antialiased text-sm mt-2">
                Check out the JSON Format Below!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative overflow-hidden">
        <div className="w-[40%] h-[70%] absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-zinc-700 rounded-2xl flex flex-col justify-evenly items-start source-code-medium text-white font-xl p-10">
          <h1 className="fira-sans-medium text-3xl self-center">
            JSON File Format
          </h1>
          <p className="text-yellow-200">{`{`}</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-200">"Organisation"</span>:
            <span className="text-green-400">
              &nbsp;"Samsung Technologies",
            </span>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-yellow-200">"Technologies"</span>:
            <span className="text-green-400">{`[`}</span>
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Technology 1" ,
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Technology 2" ,
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Technology 3" ,
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Technology 4" ,
          </p>
          <p className="text-orange-400">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Technology 5" ,
          </p>
          <p className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;{`]`}</p>
          <p className="text-yellow-200">{`}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
