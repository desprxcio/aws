const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/knex");
const path = require('path')

const server = () => {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.get("/cards", async (req, res) => {
    try {
      res.header("Access-Control-Allow-Origin", "*");
      const cards = await db("cards").select("*");
      res.status(200).send(cards);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post("/addCard", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { question } = req.body;
    db("cards")
      .insert({
        question: question,
      })
      .then(() => {
        return res.status(200).send("sent");
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  app.delete("/delete-card", (req, res) => {
    const cardId = req.body;
    const cardToDelete = Number(cardId.id);
    res.header("Access-Control-Allow-Origin", "*");
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

  return app;
};

module.exports = server;
