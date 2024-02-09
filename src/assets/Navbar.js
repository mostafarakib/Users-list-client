import React from "react";
import "../index.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">User List</Link>
      </div>
    </div>
  );
}
