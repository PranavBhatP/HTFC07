import React from "react";

import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { useContext } from "react";
import { ReportContext } from "../../App";

const Chart = ({ data }) => {
  return <></>;
};

const Report = () => {
  const { data, setData } = useContext(ReportContext);

  return (
    <div className="bg-[#120624] min-h-screen py-5 flex flex-col justify-evenly items-center gap-5 w-screen">
      <h1 className="bg-gradient-to-r from-[#2f6ef2] to-[#e936bf] bg-clip-text text-transparent text-[3.5rem] fira-sans-medium">
        Graph Reports
      </h1>
      <div className="flex flex-row justify-evenly items-center overflow-hidden">
        {data.data.map((item, index) => {
          console.log(item);
          const data = [
            { name: "Pranav", age: 18 },
            { name: "Calisto", age: 18 },
            { name: "Rijul", age: 17 },
          ];
          return (
            <>
              <LineChart width={500} height={300} data={item}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="baseMetric" stroke="#ffffff" />
              </LineChart>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Report;
