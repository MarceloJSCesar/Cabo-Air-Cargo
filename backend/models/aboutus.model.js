import mongoose from "mongoose";
const { Schema } = mongoose;

const aboutUs_schema = new Schema(
  {
    title: { type: String, required: true },
    rightTxt: { type: String, required: true },
    leftTxt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const aboutUs = mongoose.model("aboutUs", aboutUs_schema);

export default aboutUs;
