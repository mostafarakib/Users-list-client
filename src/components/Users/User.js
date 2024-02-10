import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading to true before fetching data
      try {
        const url = `https://dummyjson.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    }

    fetchData();
  }, [id]);
  return (
    <div className="user">
      {loading ? (
        <div className="spinner-border my-5 mx-auto text-primary" role="status">
          <span className="visually-hidden mx-auto">Loading...</span>
        </div>
      ) : (
        <>
          <div>
            <img
              className="user-image"
              src={user.image}
              alt={`${user.firstName} ${user.lastName} img`}
            />
          </div>
          <div className="user-info">
            <h2 className="mt-2 fw-bold">
              Name:
              {user.firstName} {user.lastName}
            </h2>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address?.address}, {user.address?.city}
            </p>
            <p className="user-card-designation">
              Profession: {user.company?.title}
            </p>
            <p>Company: {user.company?.name}</p>
          </div>
        </>
      )}
    </div>
  );
}
