import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hotel name is required"],
      trim: true,
      maxlength: [50, "Name must be less than 50 characters"],
      minlength: [3, "Name must be at least 3 characters"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be positive"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    image: {
      type: String,
      default: "https://via.placeholder.com/300",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

export default Hotel;
