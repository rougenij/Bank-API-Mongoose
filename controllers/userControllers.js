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
const addUser = async (req, res) => {};

const editUser = (req, res) => {};

const deleteUser = (req, res) => {};

const withdraw = (req, res) => {
  const { id, withdraw } = req.body;
  try {
    if (checkUser(id)) {
      const client = findUser(id);
      if (client.credit - withdraw >= 0) {
        const newCredit = client.credit - withdraw;
        const newCash = client.cash + withdraw;
        const data = updateDataUser(id, newCash, newCredit);
        updateClient(data, path);
        res.send(`You Have ${newCredit} on you accaount`);
      } else {
        throw new Error("sorry not enough money");
      }
    } else {
      throw new Error(`sorry, no user with the id:${id} found`);
    }
  } catch (err) {
    res.send(err.toString());
  }
};

const depositing = (req, res) => {
  const { id, depositing } = req.body;
  try {
    if (checkUser(id)) {
      const client = findUser(id);
      if (client.cash - depositing >= 0) {
        const newCash = client.cash - depositing;
        const newCredit = client.credit + depositing;
        console.log(client.cash, "cash");
        console.log(client.credit, "credit");
        console.log("======");
        console.log(newCash, "newCash");
        console.log(newCredit, "newCredit");
        const data = updateDataUser(id, newCash, newCredit);
        updateClient(data, path);
        res.send(`You Have ${newCredit} on you accaount`);
      } else {
        throw new Error("Sorry, You Have not Enough Cash");
      }
    } else {
      throw new Error(`No User With The Id:${id} Has Been Found`);
    }
  } catch (err) {
    res.send(err.toString());
  }
};

const transferring = (req, res) => {};

module.exports = {
  getUser,
  addUser,
  editUser,
  deleteUser,
  getAllUsers,
  withdraw,
  depositing,
  transferring,
};
