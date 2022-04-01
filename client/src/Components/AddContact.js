import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions/ContactActions";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Form
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
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
          <Form.Label>Username</Form.Label>
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
          style={{
            margin: 20,
          }}
          onClick={() => {
            dispatch(addContact({ username, email, age }));
            navigate("/contacts");
          }}
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
