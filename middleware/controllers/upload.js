import * as fs from "node:fs";

const uploader = async (req, res, next) => {
  fs.readFile(`./uploads/${req.fileName}`, "UTF-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
};

export default uploader;
