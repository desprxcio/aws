import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { Button, Card, Form, Stack } from "react-bootstrap";

export default function Game() {
  const [newCard, setNewCard] = useState({});
  const [question, setQuestion] = useState("");
  const [uid, setUid] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchUid = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUid(data.uid);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  function addCard() {
    setNewCard({
      question: question,
    });
  }

  async function saveCard() {
    return await axios.post(`/add-card`, newCard);
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/dashboard");
    fetchUid();
  }, [user, loading]);

  return (
    <div>
      <Card>
        <Card.Body>
          <h1>Add a card!</h1>
          <Form>
            <Form.Group className="form">
              <Form.Label className="labels"> Type your question here... </Form.Label>
              <Form.Control
                type="string"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Question"
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
