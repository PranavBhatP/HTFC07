import * as fs from "node:fs";
import axios from "axios";

const uploader = async (req, res) => {
  fs.readFile(`./uploads/${req.fileName}`, "UTF-8", async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const dataInformation = JSON.parse(data);

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      JSON.stringify(dataInformation),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Done!");
    console.log(response.data);
    return res.status(200).json(JSON.stringify(response.data));
  });
};

export default uploader;
