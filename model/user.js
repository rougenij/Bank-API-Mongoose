const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
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
module.exports = Product;
