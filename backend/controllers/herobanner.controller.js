import express from "express";
const router = express.Router();

import handleUpload from "../utils/cloudinary.config.js";
import herobanner from "../models/herobanner.model.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

/**
 * @route   POST /api/s1/upload
 * @desc    Upload hero banner image
 * @return  JSON { imgUrl: String, _id: String }
 */
router.post("/upload", upload.single("heroBanner"), async (req, res) => {
  try {
    const file = req.file.path;

    const response = await handleUpload(file); // Upload image to cloudinary

    // Save image URL to database
    const newHeroBanner = new herobanner({
      imgUrl: response.secure_url,
    });
    newHeroBanner.save();
    res.status(200).json(newHeroBanner);
  } catch (error) {
    console.log(error);
  }
});

/**
 * @route   GET /api/s1/heroBanner
 * @desc    Get hero banner image URL from database
 * @return  JSON { imgUrl: String, _id: String }
 */
router.get("/heroBanner", async (req, res) => {
  try {
    const heroBanner = await herobanner.find();
    res.status(200).json(heroBanner);
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message, message: "Something went wrong" });
  }
});

export default router;
