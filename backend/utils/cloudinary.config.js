import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import streamifier from "streamifier";
import sharp from "sharp";

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

const handleUpload = async (file) => {
  try {
    // Compress and resize the image using sharp (800px width, 80% quality)
    const buffer = await sharp(file.buffer)
      .resize({ width: 800 }) // Maintain aspect ratio
      .jpeg({ quality: 80 }) // Compress to JPEG with quality 80%
      .toBuffer();

    // Upload the processed image buffer directly to Cloudinary
    const response = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${buffer.toString("base64")}`,
      {
        resource_type: "image",
        quality: "auto",
        fetch_format: "auto",
      }
    );

    return response;
  } catch (error) {
    console.error("Error in handleUpload:", error);
    throw new Error("Image processing or upload failed");
  }
};

// delete all images from cloudinary to keep only the latest image
const deleteAll = async () => {
  const resources = await cloudinary.api.resources();
  resources.resources.forEach((resource) => {
    cloudinary.uploader.destroy(resource.public_id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  });
};

export { upload, handleUpload, deleteAll };
