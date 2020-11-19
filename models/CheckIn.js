const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkInSchema = new Schema({
  userId: {
    type: String,
    default: '8675309'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const CheckIn = mongoose.model("CheckIn", checkInSchema);

module.exports = CheckIn;
