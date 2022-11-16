import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";

export default function AddCard() {
  const [question, setQuestion] = useState("");
  const [input, setInput] = useState("");

  function saveCard() {
  
  }

  async function postCard() {
    const post = await axios.post(`https://back-end-84er.onrender.com/addCard`);
    setQuestion(post.data)
  }

  return (
    <div>
          <Form>
              <input
                onClick={postCard}
              >Add this card!
              </input>
          </Form>
    </div>
  );
}
