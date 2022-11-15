const express = require("express");
const db = require("./client/db/knex");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("hi");
});

app.get("/cards", async (req, res) => {
    try {
  const cards = await db("cards").select("*").timeOut(1500);
  res.status(200).send(cards)
    } catch(err) {
       res.send(500).send(err); 
    }
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
