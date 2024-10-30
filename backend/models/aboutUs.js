import mongoose from "mongoose";
const { Schema } = mongoose;

const aboutUs_schema = new Schema({
  title: { type: String, required: true },
  right_text: { type: String, required: true },
  left_text: { type: String, required: true },
});

const aboutUs = mongoose.model("aboutUs", aboutUs_schema);

export default aboutUs;
