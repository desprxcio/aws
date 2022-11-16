import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

export default function AllCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    showCards();
  }, []);

  async function showCards() {
    const fetchCards = await axios.get(`/allCards`);
    setCards(fetchCards.data)
    console.log(cards)
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Form>
              <Button
                className="btn btn-danger"
                onClick={() => showCards}
              >
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
