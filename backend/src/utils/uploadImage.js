import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "hotel-reservation",
  });

  return result.secure_url;
};
