import React, { useEffect, useState } from "react";
import "./Users.scss";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //self called the fetchData function
    (async function fetchData() {
      const url = "https://dummyjson.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.users);
    })();
  }, []);
  return (
    <div className="container">
      <div className="user-list-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
