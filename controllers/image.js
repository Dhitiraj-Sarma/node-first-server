const Image = require("../models/Image");

const imageUploadController = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newUser = new Image({
      name,
      description,
      imageUrl: req.file.path,
    });

    await newUser.save();
    res.status(201).json({ message: "User data saved", data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const imageFetchController = async (req, res) => {
  try {
    const images = await Image.find(); // Fetch all users from MongoDB
    res.status(200).json(images);
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { imageUploadController, imageFetchController };
