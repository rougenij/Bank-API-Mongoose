const mongoose = require("mongoose");

const User = mongoose.model("User", {
  id: {
    required: true,
    unique: true,
  },
  cash: {
    required: true,
    default: 0,
    min: 0,
  },

  credit: {
    required: true,
    default: 0,
    min: 0,
  },
});
module.exports = User;
