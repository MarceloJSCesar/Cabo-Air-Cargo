import mongoose from "mongoose";
const { Schema } = mongoose;

const heroBanner_schema = new Schema({
  title: { string: true, require: true },
  description: { string: true, require: true },
  bg_image: { string: true, require: true },
});

const heroBanner = mongoose.model("heroBanner", heroBanner_schema);

export default heroBanner;
