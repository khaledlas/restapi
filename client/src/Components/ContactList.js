import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../redux/actions/ContactActions";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcontacts());
  }, [dispatch]);
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id}></ContactCard>
      ))}{" "}
    </div>
  );
};

export default ContactList;
