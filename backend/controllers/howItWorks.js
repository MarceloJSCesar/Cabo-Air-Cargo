import express from "express";
const router = express.Router();

import howItWorks from "../models/howItWorks";

// create howItWorks
router.post("/", async (req, res) => {
  const newHowItWorks = new howItWorks(req.body);
  try {
    const savedHowItWorks = await newHowItWorks.save();
    res.status(200).json(savedHowItWorks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// read howItWorks
router.get("/", async (req, res) => {
  try {
    const allHowItWorks = await howItWorks.find();
    res.status(200).json(allHowItWorks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update howItWorks
router.put("/:id", async (req, res) => {
  try {
    const updatedHowItWorks = await howItWorks.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHowItWorks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete howItWorks
router.delete("/:id", async (req, res) => {
  try {
    await howItWorks.findByIdAndDelete(req.params.id);
    res.status(200).json("howItWorks section has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
