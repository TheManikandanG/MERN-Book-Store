const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const path=require('path')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});