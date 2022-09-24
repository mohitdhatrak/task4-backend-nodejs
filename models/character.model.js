const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  id: { type: Number, unique: true },
  name: String,
  birthday: String,
  occupation: Array,
  img: String,
  status: String,
  nickname: String,
  appearance: Array,
  portrayed: String,
  category: Array
})

// const allCharacterSchema = new Schema({
//   allChar: [characterSchema],
// })

const Character = mongoose.model("all_characters", characterSchema);
// const AllCharacters = mongoose.model("all_characters", allCharacterSchema);

module.exports = { Character };

