import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

export default function AllCards() {
  const [cards, setCards] = useState([]);

  async function showCards() {
    const fetchCards = await axios.get(`http://localhost:3000/cards`);
    setCards(fetchCards.data)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Form>
              <Button
                className="btn btn-danger"
                onClick={showCards}
              >
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
