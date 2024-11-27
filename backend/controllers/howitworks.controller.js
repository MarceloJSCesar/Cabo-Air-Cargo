import express from "express";
const router = express.Router();

import howItWorks from "../models/howitworks.model.js";

/**
 * @route   POST /api/s2/howitworks
 * @desc    Add how it works content
 * @return  JSON { message: String, savedHowItWorks: { title: String, description: String, videoUrl: String }}
 */
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
    res.status(200).json({
      message: "How it works content added successfully",
      savedHowItWorks,
    });
  } catch (err) {
    res.status(500).json({ err: err, error: "Something went wrong" });
  }
});

/**
 * @route   GET /api/s2/howitworks
 * @desc    Get all how it works content
 * @return  JSON [{ title: String, description: String, videoUrl: String }]
 */
router.get("/howitworks", async (req, res) => {
  try {
    const allHowItWorks = await howItWorks.findOne();
    res.status(200).json(allHowItWorks);
  } catch (error) {
    res
      .status(500)
      .json({ err: error, error: "Something went wrong! Please try again." });
  }
});

/**
 * @route   PUT /api/s2/howitworks
 * @desc    update how it works content
 * @return  JSON { message: String, updatedHowItWorks: { title: String, description: String, videoUrl: String }}
 */
router.put("/howitworks", async (req, res) => {
  const { title, description, videoUrl } = req.body;

  if (!title || !description || !videoUrl) {
    return res.status(400).json("Please fill all fields...");
  }

  try {
    const updatedHowItWorks = await howItWorks.findOneAndUpdate(
      req.params.id,
      {
        title,
        description,
        videoUrl,
      },
      { new: true }
    );
    res.status(200).json({
      message: "How it works content updated successfully",
      updatedHowItWorks,
    });
  } catch (err) {
    res.status(500).json({ err: err, error: "Something went wrong" });
  }
});

export default router;
