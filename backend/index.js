import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import "./utils/mongodb.js";
import { createUser } from "./controllers/authController.js";
import auth from "./controllers/authController.js";

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet()); // secure express app by setting various HTTP headers

// // ROUTES
app.use("/api/v1/user", auth);

// ----------------------------- UNCOMMENT THE LINE BELOW TO CREATE ADMIN USER -----------------------------
// createUser();

const Port = 8000;
app.listen(Port, () => console.log(`App running http://localhost:${Port}`));
