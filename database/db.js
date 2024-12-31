const mongoose = require("mongoose");

const connectTODB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (error) {
    console.log("Error in Mongo", error);
    process.exit(1);
  }
};

module.exports = connectTODB;
