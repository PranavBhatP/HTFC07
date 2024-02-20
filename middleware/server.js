import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

import uploader from "./controllers/upload.js";

// Configurations

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// File Storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.fileName);
  },
});

const upload = multer({ storage });

app.post(
  "/models/coefficients",
  (req, res, next) => {
    const name = `${Date.now()}-${uuidv4()}.json`;
    req.fileName = name;
    next();
  },
  upload.single("FileUpload"),
  uploader
);

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
