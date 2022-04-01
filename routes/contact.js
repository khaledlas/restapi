const express = require("express");
const res = require("express/lib/response");
const {
  AddContact,
  GetContacts,
  GetOneContact,
  DeleteContact,
  UpdateContact,
} = require("../controllers/contact");

const ContactRoutes = express.Router();

ContactRoutes.post("/", AddContact);

ContactRoutes.get("/getcontacts", GetContacts);
ContactRoutes.get("/:id", GetOneContact);
ContactRoutes.delete("/deletecontact/:id", DeleteContact);
ContactRoutes.put("/updatecontact/:id", UpdateContact);
module.exports = ContactRoutes;
