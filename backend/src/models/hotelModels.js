import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlenght: [50, "name less then 50 charachter"],
    minlenght: [3, "name must be more then 3 charachter"],
  },
  price: {
    type: Number,
    required: true,
    positive: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const hotelModel =
  mongoose.models.hotel || mongoose.model("hotel", hotelSchema);

export default hotelModel;
