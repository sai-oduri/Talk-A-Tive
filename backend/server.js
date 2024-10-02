const express = require("express");

const dotenv = require("dotenv");

const { chats } = require("./data/data.js")

dotenv.config();

const app = express();

app.get("/chat", (req, res) => {
    res.send(chats);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => { console.log(`Server Started on PORT ${PORT}`) });