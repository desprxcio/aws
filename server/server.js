const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/knex");

const server = () => {
  const app = express();

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.get("/cards", async (req, res) => {
    try {
      const cards = await db("cards").select("*");
      res.status(200).send(cards);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post("/add-card", (req, res) => {
    const { question } = req.body;
    db("cards")
      .insert({
        question: question,
      })
      .then(() => {
        return res.status(200).send("test");
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  app.delete("/delete-card", (req, res) => {
    const cardId = req.body;
    const cardToDelete = Number(cardId.id);
    db("cards")
      .where("id", "=", cardToDelete)
      .del()
      .then(() => {
        res.send("Card deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // app.put('/update-card', (req, res) => {
  //     const cardId = req.body.id;
  //     const cardContent = req.body.question;
  //     const cards = db("cards").select("*")
  //     const matchingCard = cards.filter((card) => card.id === cardId)
  //     db('cards')
  //         .where(matchingCard)
  //         .update({ question: cardContent })
  //         .then(() => {
  //             console.log('Card updated');
  //             return res.json(cards);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // });

  return app;
};

module.exports = server;
