import express from "express";
const router = express.Router();
import howItWorks from "../models/howitworks.model.js";

/**
 * @route   GET /api/s2/howitworks
 * @desc    Get all how it works content
 * @return  JSON [{ title: String, description: String, videoUrl: String }]
 */
router.get("/howitworks", async (req, res) => {
  try {
    const howitworks = await howItWorks.findOne();

    if (!howitworks || howitworks.length === 0) {
      return res
        .status(404)
        .json({ message: "How it works details not found" });
    }

    res.status(200).json(howitworks);
  } catch (error) {
    console.error("Error fetching How it works details:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

/**
 * @route   PATCH /api/s2/howitworks
 * @desc    update how it works content (title, description, videoUrl) or create if not exists
 * @return  JSON { message: String, updatedHowItWorks: { title: String, description: String, videoUrl: String }}
 */
router.patch("/howitworks", async (req, res) => {
  const data = Object.fromEntries(
    Object.entries(req.body).filter(
      ([_, value]) => value !== null && value !== ""
    )
  );

  try {
    const howitworks = await howItWorks.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    );
    res.status(200).json({ howitworks });
  } catch (error) {
    console.error("Error updating How it works details:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

export default router;
