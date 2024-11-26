import express from "express";
const router = express.Router();

import AboutUs from "../models/aboutus.model.js";

/**
 * @route   POST /api/s3/aboutus
 * @desc    Add about us content
 * @return  JSON { message: String, savedAboutUs: { title: String, rightTxt: String, leftTxt: String }}
 */
router.post("/aboutus", async (req, res) => {
  const { title, rightTxt, leftTxt } = req.body;

  if (!title || !rightTxt || !leftTxt) {
    return res.status(400).json("Please fill all fields...");
  }

  const newAboutUs = new AboutUs({ title, rightTxt, leftTxt });
  try {
    const savedAboutUs = await newAboutUs.save();
    res.status(200).json({
      message: "About us content added successfully",
      savedAboutUs,
    });
  } catch (err) {
    res.status(500).json({
      err: err,
      error: "Something went wrong! Please try again.",
    });
  }
});

/**
 * @route   GET /api/s3/aboutus
 * @desc    Get all about us content
 * @return  JSON [{ title: String, rightTxt: String, leftTxt: String }]
 */
router.get("/aboutus", async (req, res) => {
  try {
    const aboutUs = await AboutUs.find();
    res.status(200).json(aboutUs);
  } catch (err) {
    res.status(500).json({
      err: err,
      error: "Something went wrong! Please try again.",
    });
  }
});

/**
 * @route   PUT /api/s3/aboutus/
 * @desc    Update about us content
 * @return  JSON { message: String, updatedAboutUs: { title: String, rightTxt: String, leftTxt: String }}
 */
router.put("/aboutus", async (req, res) => {
  const { title, rightTxt, leftTxt } = req.body;

  if (!title || !rightTxt || !leftTxt) {
    return res.status(400).json("Please fill all fields...");
  }

  try {
    const updatedAboutUs = await AboutUs.findOneAndUpdate(
      req.params.id,
      { title, rightTxt, leftTxt },
      { new: true }
    );
    res.status(200).json({
      message: "About us content updated successfully",
      updatedAboutUs,
    });
  } catch (err) {
    res.status(500).json({
      err: err,
      error: "Something went wrong! Please try again.",
    });
  }
});

export default router;
