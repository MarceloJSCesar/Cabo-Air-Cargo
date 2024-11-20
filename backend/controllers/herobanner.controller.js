import express from "express";
const router = express.Router();

import { handleUpload, upload, deleteAll } from "../utils/cloudinary.config.js";
import herobanner from "../models/herobanner.model.js";

/**
 * @route   PUT /api/s1/updateBanner
 * @desc    update hero banner image
 * @return  JSON { imgUrl: String}
 */
router.put("/updateBanner", upload.single("heroBanner"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }

    await deleteAll();

    const response = await handleUpload(req.file);

    const updatedBanner = await herobanner.findOneAndUpdate(
      {},
      { imgUrl: response.secure_url },
      { new: true, upsert: true }
    );

    if (!updatedBanner) {
      return res.status(500).json({ error: "Failed to update banner" });
    }

    res.status(200).json({
      message:
        "Banner updated successfully! 🎉 Refresh the page to get the latest changes",
      imgUrl: updatedBanner.imgUrl,
    });
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ message: "Failed to update banner" });
  }
});

/**
 * @route   GET /api/s1/heroBanner
 * @desc    Get hero banner image URL from database
 * @return  JSON { imgUrl: String, _id: String }
 */
router.get("/heroBanner", async (req, res) => {
  try {
    const heroBanner = await herobanner.findOne();
    res.status(200).json({
      imgUrl: heroBanner?.imgUrl,
    });
  } catch (error) {
    res.status(500).json({
      err: error.message,
      message: "Something went wrong! Please try again.",
    });
  }
});

export default router;
