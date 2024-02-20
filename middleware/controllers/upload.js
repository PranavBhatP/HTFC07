import * as fs from "node:fs";
import axios from "axios";

const uploader = async (req, res, next) => {
  fs.readFile(`./uploads/${req.fileName}`, "UTF-8", async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataInformation = JSON.parse(data);
    let response = null;
    try {
      response = await axios.post(
        "http://127.0.0.1:5000/predict",
        JSON.stringify(dataInformation),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      response = await axios.post(
        "http://127.0.0.1:5000/predict",
        JSON.stringify(dataInformation),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    console.log(response.data);
    const dataProcessed = [];

    for (let i = 0; i < response.data.length; i++) {
      const keys = Object.keys(response.data[i].coords);
      const values = Object.values(response.data[i].coords);

      const temp = [];

      for (let j = 0; j < keys.length; j++) {
        const object = {
          name: `${keys[j].substring(4, 6)}/${keys[j].substring(0, 4)}`,
          baseMetric: Number(values[j]),
        };

        temp.push(object);
      }
      dataProcessed.push(temp);
    }

    return res.status(200).json({ data: dataProcessed });
  });
};

export default uploader;
