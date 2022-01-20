const withdraw = (user) => {
  if (Math.abs(selectedUser.cash) === selectedUser.credit) {
    return res.status(400).send("Cannot withdraw anymore");
  }
  if (req.body.sumToWithdraw < selectedUser.cash) {
    selectedUser.cash -= req.body.sumToWithdraw;
    res.send(selectedUser);
    savedUsers(users);
  }
  if (req.body.sumToWithdraw > selectedUser.cash + selectedUser.credit) {
    return res
      .status(400)
      .send("Hey.. what you trying to do?? Cannot withdraw more");
  } else {
    selectedUser.cash -= req.body.sumToWithdraw;
    res.send(selectedUser);
    savedUsers(users);
  }
};
