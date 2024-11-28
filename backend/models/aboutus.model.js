import mongoose from "mongoose";
const { Schema } = mongoose;

const aboutUs_schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    videoUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const aboutUs = mongoose.model("aboutUs", aboutUs_schema);

export default aboutUs;
