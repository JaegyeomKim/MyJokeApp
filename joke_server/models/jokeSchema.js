const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nickname: String,
  content: String,
  ans: String,
  isFlipped: Boolean,
  likes: Number,
});

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;