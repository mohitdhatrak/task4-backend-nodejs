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
    // let allCharArray;
    // for (const obj of response.data) {
    //   allCharArray.push(obj);
    // }
    // const allCharObj = new Character({ allChar: [...response.data] });
    // const data = await allCharObj.save();
    // console.log(data);
    const char1Data =
      response.data.find(obj => obj.name === "Walter White");
    const char2Data =
      response.data.find(obj => obj.name === "Gustavo Fring");
    const char1 = new Character(char1Data);
    const char2 = new Character(char2Data);
    const data1 = await char1.save();
    // const data2 = await char2.save();
    console.log("yo")
    res.json(data1);
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

// app.delete(async (req, res) => {
// try {

// });
//   } catch (error) {
//     res.json({
//       message: "There was some issue while updating your data",
//       error,
//     });
//   }
// });

app.listen(3000);