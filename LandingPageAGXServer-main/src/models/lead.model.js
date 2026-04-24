import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    clinicName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", leadSchema);
