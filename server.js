require("dotenv").config();
const express = require("express");
const connectTODB = require("./database/db");
const ImageUploadRoute = require("./routes/imageRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectTODB();

app.use("/api", ImageUploadRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
