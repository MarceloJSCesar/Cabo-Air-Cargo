import { v2 as cloudinary } from "cloudinary";

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const handleUpload = async (file) => {
  try {
    const imgData = await cloudinary.uploader.upload(file);
    return imgData;
  } catch (error) {
    console.log(error);
  }
};

export default handleUpload;
