import Hotel from "../models/hotelModel.js";
// import { uploadImage } from "../utils/uploadImage.js";

// Create Hotel
export const createHotel = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
    if (!name || !price || !description || !image) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const hotel = await Hotel.create({
      name,
      price,
      description,
      image,
    });
    res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Hotels
export const getHotels = async (req, res) => {
  try {
    res.json({ message: "get all hotels" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Hotel
export const getHotel = async (req, res) => {
  try {
    res.json({ message: "get one hotel" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Hotel
export const updateHotel = async (req, res) => {
  try {
    res.json({ message: "update hotel" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Hotel
export const deleteHotel = async (req, res) => {
  try {
    res.json({ message: "delete hotel" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
