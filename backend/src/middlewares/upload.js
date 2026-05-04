import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, res, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
export const update = multer({ storage });
