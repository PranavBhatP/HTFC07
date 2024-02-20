const { convertXML } = require("simple-xml-to-json");
const { readFile } = require("fs/promises");

async function content(path) {
  return await readFile(path, "utf8");
}

const uploader = async (req, res, next) => {
  const text = await content(`../uploads/${req.body.fileName}`);
  const json = convertXML(text);
};
