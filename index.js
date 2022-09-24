const express = require('express');
const axios = require('axios');
const { connectToMongoDB } = require("./db/db.connect.js");
const { Character } = require("./models/character.model.js");

const app = express();

connectToMongoDB();

app.post("/", async (req, res) => {
  const apiURL = "https://breakingbadapi.com/api/characters";

  try {
    const response = await axios.get(apiURL);
    let eachChar;
    for (const obj of response.data) {
      eachChar = new Character(obj);
      const data = await eachChar.save();
    }
    res.json(response);
  }
  catch (error) {
    res.json({
      message: "Some error occurred",
      error,
    });
  }
})

app.get("/", async (req, res) => {
  try {
    const allChar = await Character.find({});
    res.json({ allChar });
  } catch (error) {
    res.json({
      message: "Could not get the character data",
      error,
    });
  }
});

app.listen(3000);