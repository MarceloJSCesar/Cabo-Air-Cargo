import express from "express";
const router = express.Router();
import AboutUs from "../models/aboutus.model.js";

/**
 * @route   GET /api/s3/aboutus
 * @desc    Get all about us content
 * @return  JSON [{ title: String, description: String, videoUrl: String }]
 */
router.get("/aboutus", async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne();

    if (!aboutUs || aboutUs.length === 0) {
      return res.status(404).json({ message: "About Us details not found" });
    }

    res.status(200).json(aboutUs);
  } catch (error) {
    console.error("Error fetching About Us details:", error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});
/**
 * @route   PATCH /api/s3/aboutus/
 * @desc    Update about us content (title, description, videoUrl) or create if not exists
 * @return  JSON { message: String, updatedAboutUs: { title: String, description: String, videoUrl: String }}
 */
router.patch("/aboutus", async (req, res) => {
  const data = Object.fromEntries(
    Object.entries(req.body).filter(
      ([_, value]) => value !== null && value !== ""
    )
  );

  try {
    const aboutus = await AboutUs.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    );
    res.status(200).json({ aboutus });
  } catch (err) {
    console.error("Error updating About Us details:", err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

export default router;
