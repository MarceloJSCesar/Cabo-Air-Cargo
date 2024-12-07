import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
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
    const buffer = await sharp(file.buffer).jpeg({ quality: 100 }).toBuffer();

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
    console.log("Error uploading image:", error);
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
