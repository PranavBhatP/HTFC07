import React from "react";

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Text } from "recharts";
import { useContext } from "react";
import { ReportContext } from "../../App";
import { Link } from "react-router-dom";

const Report = () => {
  const { data, setData } = useContext(ReportContext);

  // console.log(data);

  let plot = data?.data?.data;
  console.log(plot);

  let meta = data?.data?.meta;
  console.log(meta);

  let technologies = data?.data?.technologies;

  return (
    <div className="bg-[#120624] min-h-screen py-5 flex flex-col justify-evenly items-center gap-10 w-screen relative">
      {data === "" && (
        <>
          {" "}
          <h1 className="absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 text-white fira-sans-medium text-[4rem] w-[30vw] h-[30vw] text-center align-middle">
            Invalid Route!
          </h1>
        </>
      )}
      {data !== "" && (
        <>
          <h1 className="bg-gradient-to-r from-[#2f6ef2] to-[#e936bf] bg-clip-text text-transparent text-[3.5rem] fira-sans-medium">
            Graph Reports
          </h1>
          <p className="text-gray-500 antialiased">
            Graphs of Base Metric Scores vs Dates
          </p>
          <div className="flex flex-col justify-evenly items-center overflow-hidden gap-10 w-[85%] ">
            {plot.map((item, index) => {
              return (
                <>
                  <div className="flex flex-row justify-evenly items-center w-[99%] gap-20 p-5 border-2 border-zinc-800 rounded-xl">
                    <h1 className="text-white fira-sans-medium text-[2.5rem]">
                      {technologies[index]}
                    </h1>
                    <LineChart
                      width={500}
                      height={300}
                      data={item}
                      className="shrink-0 w-[50%]"
                    >
                      <XAxis dataKey="name" padding={{ bottom: 30 }} />
                      <YAxis type="number" domain={[0, 10]} />
                      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                      <Line
                        type="monotone"
                        dataKey="baseMetric"
                        stroke="#ffffff"
                      />
                    </LineChart>
                    <div className="flex flex-col justify-evenly items-start gap-4">
                      {meta[index].map((metaItem, metaIndex) => {
                        const keys = Object.keys(metaItem);
                        const values = Object.values(metaItem);

                        return (
                          <>
                            {keys.length != 0 && (
                              <h2 className="text-white text-lg fira-sans-medium">
                                {
                                  [
                                    "Attack Vector Predictions for the Next Month",
                                    "Attack Vector Predictions for the Next Year",
                                  ][metaIndex]
                                }
                              </h2>
                            )}
                            {keys.map((metaItemVector, metaItemVectorIndex) => {
                              return (
                                <>
                                  <div className="flex flex-col justify-evenly items-center gap-[5px] w-[100%]">
                                    <h3 className="text-white text-md fira-sans-extralight ">
                                      {metaItemVector}
                                    </h3>
                                    <div className="w-[80%] rounded bg-orange-300 h-[20px]">
                                      <div
                                        className="rounded bg-red-600 h-[20px]"
                                        style={{
                                          width: `${
                                            values[metaItemVectorIndex] * 100
                                          }%`,
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
