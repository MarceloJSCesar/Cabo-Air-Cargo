import mongoose from "mongoose";
const { Schema } = mongoose;

const howItWorks_schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    videoUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

const howItWorks = mongoose.model("howItWorks", howItWorks_schema);

export default howItWorks;
