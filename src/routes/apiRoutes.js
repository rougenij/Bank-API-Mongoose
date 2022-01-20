const express = require("express");
const {
  getUser,
  addUser,
  deleteUser,
  getAllUsers,
  withdraw,
  depositing,
  transferring,
} = require("../controllers/userControllers");

const apiRouter = express.Router();
//!GET Methods
apiRouter.get("/users/:id", getUser).get("/users", getAllUsers);
//!POST Methods
apiRouter.post("/users", addUser);
//!PATCH Methods
apiRouter
  .patch("/users/withdraw", withdraw)
  .patch("/users/depositing", depositing)
  .patch("/users/transferring", transferring);
//!DELETE Methods
apiRouter.delete("/users/:id", deleteUser);

module.exports = apiRouter;
