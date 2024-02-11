import React, { useEffect, useState } from "react";
import "./Users.scss";
import UserCard from "./UserCard";
import UserAddForm from "./UserAddForm";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    async function fetchData() {
      try {
        let url = "https://dummyjson.com/users";

        if (searchQuery) {
          url = `https://dummyjson.com/users/search?q=${searchQuery}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    }

    fetchData();
  }, [searchQuery]);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //function to handle search form submit
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
  };

  // Function to handle sorting change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to sort users based on selected criteria
  const sortedUsers = users.slice().sort((a, b) => {
    if (sortBy === "name") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    }
    return 0;
  });
  return (
    <div className="container">
      <div className="user-filter-container">
        <form
          className="user-filter-container-search-form"
          onSubmit={handleSearchFormSubmit}
        >
          <input
            className="user-filter-container-search-bar"
            type="search"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
        <div>
          <select
            className="user-filter-container-select"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="company">Sort by Company</option>
          </select>
        </div>
      </div>
      <div className="user-list-container">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <UserAddForm />
    </div>
  );
}
