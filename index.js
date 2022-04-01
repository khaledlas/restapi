//require express
const express = require("express");
const connectDB = require("./config/connectDB");

// instance app of all express method
const app = express();
require("dotenv").config();

// connect with the database
connectDB();

//to translate the data to json
app.use(express.json());

//routes
const ContactRoutes = require("./routes/contact");
app.use("/api/contact", ContactRoutes);

// start the server
app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
