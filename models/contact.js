const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  age: Number,
});

module.exports = mongoose.model("contact", contactsSchema);
