import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <Link to="/">
          <button>HomePage</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
        <Link to="/settings">
          <button>Add Users</button>
        </Link>
        <Link to="/userstatus">
          <button>User Settings</button>
        </Link>
      </header>
    </div>
  );
}
