import React, { useState } from "react";

function Settings() {
  const [id, setID] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://bankapi-mongoose.herokuapp.com/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: id,
              cash: +cash,
              credit: +credit,
            }),
          });
        }}
      >
        <div>
          <label>User's ID:</label>
          <input
            type="text"
            placeholder="User's ID"
            id="id"
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div>
          <label>User's Cash:</label>
          <input
            type="number"
            placeholder="User's Cash"
            id="cash"
            min="0"
            onChange={(e) => setCash(e.target.value)}
          />
        </div>
        <div>
          <label>User's Credit </label>
          <input
            type="number"
            placeholder="User's Credit"
            id="credit"
            min="0"
            onChange={(e) => setCredit(e.target.value)}
          />
        </div>
        <input type="submit" value="Add User" />
      </form>
      <div>
        {id}
        {cash}
        {credit}
      </div>
    </div>
  );
}

export default Settings;
