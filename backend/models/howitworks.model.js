import mongoose from "mongoose";
const { Schema } = mongoose;

const howItWorks_schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const howItWorks = mongoose.model("howItWorks", howItWorks_schema);

export default howItWorks;
