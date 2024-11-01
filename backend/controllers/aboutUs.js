import express from "express";
const router = express.Router();

import AboutUs from "../models/aboutUs.js";

router.post("/aboutus", async (req, res) => {
  const { title, rightTxt, leftTxt } = req.body;

  const newAboutUs = new AboutUs({ title, rightTxt, leftTxt });
  try {
    const savedAboutUs = await newAboutUs.save();
    res.status(200).json(savedAboutUs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/aboutus", async (req, res) => {
  try {
    const aboutUs = await AboutUs.find();
    res.status(200).json(aboutUs);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
