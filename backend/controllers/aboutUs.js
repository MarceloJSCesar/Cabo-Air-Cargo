import express from "express";
const router = express.Router();

import AboutUs from "../models/aboutUs.js";

// create aboutUs
router.post("/", async (req, res) => {
  const newAboutUs = new AboutUs(req.body);
  try {
    const savedAboutUs = await newAboutUs.save();
    res.status(200).json(savedAboutUs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// read aboutUs
router.get("/", async (req, res) => {
  try {
    const aboutUs = await AboutUs.find();
    res.status(200).json(aboutUs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update aboutUs
router.put("/:id", async (req, res) => {
  try {
    const aboutUs = await AboutUs.findById(req.params.id);
    if (aboutUs) {
      await aboutUs.updateOne({ $set: req.body });
      res.status(200).json("The aboutUs has been updated");
    } else {
      res.status(404).json("aboutUs not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete aboutUs
router.delete("/:id", async (req, res) => {
  try {
    const aboutUs = await AboutUs.findById(req.params.id);
    if (aboutUs) {
      await aboutUs.deleteOne();
      res.status(200).json("The aboutUs has been deleted");
    } else {
      res.status(404).json("aboutUs not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
