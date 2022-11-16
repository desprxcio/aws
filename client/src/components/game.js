import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./game.css";
import "./Card.css";
import { Card } from "react-bootstrap";

export default function Game() {
  const [deck, setDeck] = useState("");

  async function fetchQuestions() {
    const fetchCards = await axios.get(
      `https://back-end-84er.onrender.com/cards`
    );
    setDeck(fetchCards.data);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function handleDeck() {
    let questions = [];
    for (let i = 0; i < deck.length; i++) {
      questions.push(deck[i].question);
    }
    return questions;
  }

  useEffect(() => {
    handleDeck();
  }, []);

  let ntm = handleDeck();

  const [currCard, setCurrCard] = useState(0);

  function handleNextCard() {
    const nextCard = currCard + 1;
    if (nextCard < ntm.length) {
      setCurrCard(nextCard);
    } else {
      console.log("end of the game");
    }
  }

  const displayItem = useMemo(() => ntm[currCard], [ntm, currCard]);

  useEffect((e) => {
    handleNextCard();
  }, []);

  return (
    <div className="App">
      <div className="question">
      <div className="title">are we strangers?</div>
        <Card styleName="big-card">{displayItem}</Card>
        <button className="next-card-button" onClick={() => handleNextCard()}>
          next card
        </button>
      </div>
    </div>
  );
}
