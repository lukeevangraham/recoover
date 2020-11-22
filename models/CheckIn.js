const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkInSchema = new Schema({
  userId: {
    type: String,
  },
  resetDate: {
    type: Date,
  },
});

const CheckIn = mongoose.model("CheckIn", checkInSchema);

module.exports = CheckIn;
