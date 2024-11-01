import { v2 as cloudinary } from "cloudinary";

// cloudinary config
cloudinary.config({
  cloud_name: "dqhvwmpre",
  api_key: "955224142677362",
  api_secret: "59eqTtCDuaKFQ_Mp17jNDv_xdB8",
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
