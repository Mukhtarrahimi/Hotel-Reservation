import Hotel from "../models/hotelModel.js";
import cloudinary from "../config/cloudinary.js";

// Create Hotel
export const createHotel = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const file = req.file;

    if (!name || !price || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    let imageUrl = "";

    if (file) {
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "image",
      });

      imageUrl = result.secure_url;
    } else {
      imageUrl = "https://via.placeholder.com/150";
    }

    const hotel = await Hotel.create({
      name,
      price,
      description,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
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
