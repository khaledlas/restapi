import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact, getonecontact } from "../redux/actions/ContactActions";

const EditContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getonecontact(id));
  }, []);

  const contact = useSelector((state) => state.ContactReducer.contact);

  const [username, setUsername] = useState(contact.username);
  const [email, setEmail] = useState(contact.email);
  const [age, setAge] = useState(contact.age);

  useEffect(() => {
    setUsername(contact.username);
    setEmail(contact.email);
    setAge(contact.age);
  }, [contact]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>age</Form.Label>
          <Form.Control
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            placeholder="Age"
          />
        </Form.Group>

        <Button
          onClick={() => {
            dispatch(editContact(id, { username, email, age }));
            navigate("/contacts");
          }}
          variant="primary"
          type="submit"
        >
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditContact;
