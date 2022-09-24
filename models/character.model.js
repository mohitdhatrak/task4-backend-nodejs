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

const Character = mongoose.model("all_characters", characterSchema);

module.exports = { Character };

