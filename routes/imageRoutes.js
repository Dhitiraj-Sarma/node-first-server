const express = require("express");
const upload = require("../middleware/imageUpload");
const {
  imageUploadController,
  imageFetchController,
} = require("../controllers/image");

const router = express.Router();

router.post("/upload", upload.single("image"), imageUploadController);

router.get("/users", imageFetchController);

module.exports = router;
