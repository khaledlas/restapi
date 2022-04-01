import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../redux/actions/ContactActions";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem", margin: 10 }}>
        <Card.Body style={{ margin: 10 }}>
          <Card.Title>{contact.username}</Card.Title>
          <Card.Text>
            email : {contact.email}
            <br></br>
            age : {contact.age}
          </Card.Text>

          <Link to={`/edit/${contact._id}`}>
            <Button style={{ marginRight: 10 }} variant="primary">
              Mettre à jour
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Supprimer
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
