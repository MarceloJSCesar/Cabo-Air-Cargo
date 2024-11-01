import express from "express";
const router = express.Router();

import howItWorks from "../models/howItWorks.js";

router.post("/howitworks", async (req, res) => {
  const { title, description, videoUrl } = req.body;
  if (!title || !description || !videoUrl) {
    return res.status(400).json("Please fill all fields...");
  }

  const newHowItWorks = new howItWorks({
    title,
    description,
    videoUrl,
  });

  try {
    const savedHowItWorks = await newHowItWorks.save();
    res.status(200).json(savedHowItWorks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/howitworks", async (req, res) => {
  try {
    const allHowItWorks = await howItWorks.find();
    res.status(200).json(allHowItWorks);
  } catch (error) {
    res
      .status(500)
      .json({ err: error, message: "Something went wrong! Please try again." });
  }
});

export default router;
