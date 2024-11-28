import express from "express";
const router = express.Router();

import { handleUpload, upload, deleteAll } from "../utils/cloudinary.config.js";
import herobanner from "../models/herobanner.model.js";

/**
 * @route   PATCH /api/s1/updateBanner
 * @desc    update hero banner image URL in database and cloudinary storage
 * @return  JSON { imgUrl: String}
 */
router.patch("/updateBanner", upload.single("heroBanner"), async (req, res) => {
  try {
    const response = await handleUpload(req.file);

    deleteAll().catch((err) =>
      console.error("Error deleting old images:", err)
    );

    const updatedBanner = await herobanner.findOneAndUpdate(
      {},
      { imgUrl: response.secure_url },
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(500).json({ error: "Failed to update banner" });
    }

    res.status(200).json({
      imgUrl: updatedBanner.imgUrl,
    });
  } catch (error) {
    console.error("Error updating banner:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the banner" });
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
    console.error("Error getting banner:", error);
    res.status(500).json({
      err: error,
    });
  }
});

export default router;
