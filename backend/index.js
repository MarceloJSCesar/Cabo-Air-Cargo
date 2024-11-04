import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import "./utils/mongodb.config.js";

import auth, { createUser } from "./controllers/auth/user.controller.js";
import heroBanner from "./controllers/herobanner.controller.js";
import howItWorks from "./controllers/howitworks.controller.js";
import aboutus from "./controllers/aboutus.controller.js";

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet()); // secure express app by setting various HTTP headers

// // ROUTES
app.use("/api/user", auth);
app.use("/api/s1", heroBanner);
app.use("/api/s2", howItWorks);
app.use("/api/s3", aboutus);

// ----------------------------- UNCOMMENT THE LINE BELOW TO CREATE ADMIN USER -----------------------------
// createUser();

const Port = 8000;
app.listen(Port, () => console.log(`App running http://localhost:${Port}`));
