const contact = require("../models/contact");
exports.AddContact = async (req, res) => {
  try {
    const newContact = new contact(req.body);
    const found = await contact.findOne({ email: req.body.email });
    if (found) {
      return res.status(400).send("contact email already exist");
    }
    await newContact.save();
    res.status(200).send({ msg: "contact added ", newContact });
  } catch (error) {
    res.status(500).send("coudn't add new contact");
  }
};
exports.GetContacts = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).send({ msg: "list of contacts", contacts });
  } catch (error) {
    res.status(500).send("could not get contacts");
  }
};
exports.GetOneContact = async (req, res) => {
  try {
    const getContactById = await contact.findById(req.params.id);
    res.status(200).send({ msg: "conctacted asked", getContactById });
  } catch (error) {
    res.status(500).send("could not get contact");
  }
};
exports.DeleteContact = async (req, res) => {
  try {
    const deleteContact = await contact.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "contact deleted", deleteContact });
  } catch (error) {
    res.status(500).send("could not delete contact");
  }
};
exports.UpdateContact = async (req, res) => {
  try {
    const updateContact = await contact.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).send({ msg: "contact updated", updateContact });
  } catch (error) {
    res.status(500).send("couldn't update contact");
  }
};
