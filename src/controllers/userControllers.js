const userModel = require("../model/user");

//Get user by ID
const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(400).send("No User with this ID was found");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

//Gets all users from DB
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    if (!users) {
      return res.status(400).send("No Users in the bank data");
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Adds a new user to the DB
const addUser = async (req, res) => {
  const user = await new userModel(req.body);
  try {
    await user.save();
    res
      .status(201)
      .send({ status: "success", message: "User has been created" });
  } catch (err) {
    res
      .status(400)
      .send({ status: "failed", message: "Failed to create user" });
  }
};

//Deletes a user
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("no user with this ID");
    }
    res.send("user has been deleted" + user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const withdraw = async (req, res) => {
  const { id, withdraw } = req.body;
  try {
    console.log(id);
    const updatedUser = await userModel.findById(id);
    if (updatedUser.cash - withdraw < 0) {
      return res.status(400).send("What you trying to do???");
    }
    const newCash = updatedUser.cash - withdraw;
    const user = await userModel.findByIdAndUpdate(
      id,
      { cash: newCash },
      { new: true }
    );
    if (!user) {
      return res.status(404).send(`No User with the ID "${id}"`);
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const depositing = async (req, res) => {
  const { id, deposit } = req.body;
  try {
    const updatedUser = await userModel.findById(id);
    updatedUser.cash += deposit;
    const user = await userModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    if (!user) {
      return res.status(400).send("No User with this ID");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const transferring = async (req, res) => {
  const { id1, id2, transfer } = req.body;
  try {
    const user1 = await userModel.findById(id1);
    const user2 = await userModel.findById(id2);
    if (!user1 || !user2) {
      return res.status(404).send("Couldn't find user.");
    }
    const newCash1 = user1.cash - transfer;
    const newCash2 = user2.cash + transfer;
    const newUser1 = await userModel.findByIdAndUpdate(
      id1,
      { cash: newCash1 },
      { new: true }
    );
    const newUser2 = await userModel.findByIdAndUpdate(
      id2,
      { cash: newCash2 },
      { new: true }
    );
    if (!newUser1 || !newUser2) {
      return res.status(404).send("Couldn't find user.");
    }
    res.status(200).send(newUser1, newUser2);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  getUser,
  addUser,
  deleteUser,
  getAllUsers,
  withdraw,
  depositing,
  transferring,
};
