import React from "react";

import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(currentProgress / scrollHeight);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
  }, []);

  console.log(completion);

  return (
    <>
      <div className="h-[90%] fixed left-[3%] top-[5%] bg-[#1E0A2D] border-zinc-800 w-[0.15%] rounded overflow-hidden">
        <div
          className={`fixed w-[0.15%] bg-gradient-to-b from-[#D03FC6] to-[#306EF1]`}
          style={{ height: `${completion * 90}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
