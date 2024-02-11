import React, { useState } from "react";
import "./Users.scss";

export default function UserAddForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    profession: "",
    companyName: "",
    // image: null, // For file upload
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  //   const handleFileChange = (event) => {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       image: event.target.files[0],
  //     }));
  //   };

  const handleAddUser = async (event) => {
    event.preventDefault();

    try {
      const url = "https://dummyjson.com/users/add";
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await fetch(url, {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        alert("User added successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to add user");
      }
    } catch (error) {
      setError("Failed to add user");
      console.error("Error adding user:", error);
    }
  };
  return (
    <div>
      <h2 className="text-center mt-3">Add New User</h2>
      <form onSubmit={handleAddUser} className="add-user-form">
        <label htmlFor="firstName">Enter First Name</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="lastName">Enter Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Enter Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="address">Enter Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <label htmlFor="profession">Enter Profession</label>
        <input
          type="text"
          id="profession"
          value={formData.profession}
          onChange={handleInputChange}
        />
        <label htmlFor="companyName">Enter Company Name</label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />

        <label htmlFor="image">Upload Image</label>
        <input className="mt-2" type="file" id="image" />

        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Add User
        </button>
      </form>
    </div>
  );
}
