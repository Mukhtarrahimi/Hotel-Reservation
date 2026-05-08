import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    roomName: {
      type: String,
      required: true,
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },

    guests: {
      type: Number,
      required: true,
    },

    checkin: {
      type: Date,
      required: true,
    },

    checkout: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);