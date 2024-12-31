const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "jpg", // Or determine dynamically: file.mimetype.split('/')[1]
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

module.exports = multer({ storage });
