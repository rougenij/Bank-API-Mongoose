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
  const user = new userModel(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Deletes a user
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.body.id);
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
    const updatedUser = userModel.findById(id);
    updatedUser.cash -= withdraw;
    const user = userModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(400).send("No User with this ID");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const depositing = async (req, res) => {
  const { id, deposit } = req.body;
  try {
    const updatedUser = userModel.findById(id);
    updatedUser.cash += deposit;
    const user = userModel.findByIdAndUpdate(id, updatedUser, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(400).send("No User with this ID");
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const transferring = (req, res) => {};

module.exports = {
  getUser,
  addUser,
  deleteUser,
  getAllUsers,
  withdraw,
  depositing,
  transferring,
};
