import mongoose from "mongoose";
const { Schema } = mongoose;

const heroBanner_schema = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const heroBanner = mongoose.model("heroBanner", heroBanner_schema);

export default heroBanner;
