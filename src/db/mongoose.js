const mongoose = require("mongoose");
const keys = require("../../config/keys");

mongoose.connect(
  `mongodb+srv://rouge:${keys.CONNECT_PASS}@bankapi.rkhvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);
