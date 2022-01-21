import React, { useState, useEffect } from "react";
import myAPI from "../../api/Api";

export default function Users() {
  const [user, setUser] = useState([]);

  const getAllUsers = async () => {
    const { data } = await myAPI.get("/users");
    console.log(data);
    setUser(data);
  };

  useEffect(() => getAllUsers(), []);

  const deleteUserHandler = async (e) => {
    const id = e.target.id;
    await myAPI.delete(`/users/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <table className="userDetails">
        <thead>
          <tr>
            <th>ID</th>
            <th>Account number</th>
            <th>Cash</th>
            <th>Credit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => {
            let { _id, credit, cash } = user;
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{_id}</td>
                <td>{cash}</td>
                <td>{credit}</td>
                <td>
                  <input
                    type="button"
                    value="X"
                    id={_id}
                    onClick={(e) => deleteUserHandler(e)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
