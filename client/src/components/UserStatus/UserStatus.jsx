import React, { useState } from "react";
import myApi from "../../api/Api";

function UserStatus() {
  const [id, setID] = useState("");
  const [cash, setCash] = useState("");
  const [recieverID, setReciverID] = useState("");

  const depositCash = (id, cash) => {
    myApi.patch("/users/depositing", {
      id,
      deposit: cash,
    });
  };

  const withdrawCash = (id, cash) => {
    myApi.patch("/users/withdraw", {
      id,
      withdraw: cash,
    });
  };

  const transferCash = (id, revID, cash) => {
    myApi.patch("/users/transferring", {
      id1: id,
      id2: revID,
      transfer: cash,
    });
  };
  return (
    <div>
      <div>
        <h1>Deposit Section</h1>
        <input
          type="text"
          placeholder="User's ID"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Deposit"
          onChange={(e) => setCash(e.target.value)}
        />
        <button onClick={() => depositCash(id, cash)}>Deposit Money</button>
      </div>
      <div>
        <h1>Withdraw Section</h1>
        <input
          type="text"
          placeholder="User's ID"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Withdraw"
          onChange={(e) => setCash(e.target.value)}
        />
        <button onClick={() => withdrawCash(id, cash)}>Withdraw Money</button>
      </div>
      <div>
        <h1>Transfer Section</h1>
        <input
          type="text"
          placeholder="User's ID"
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reciever's ID"
          onChange={(e) => setReciverID(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Transfer"
          onChange={(e) => setCash(e.target.value)}
        />
        <button onClick={() => transferCash(id, recieverID, cash)}>
          Transfer Money
        </button>
      </div>
    </div>
  );
}

export default UserStatus;
