import React, { useState } from "react";
import { _TARGET } from "./_target";

const Addadmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    await fetch(`${_TARGET}/api/auth/register/admin`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Add New Administrator</h1>
      <form
        style={{
          border: "2px dotted black",
          padding: "20px",
          width: "300px",
          margin: "20px auto",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username" style={{ color: "white" }}>
            Set Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              marginBottom: "10px", // Add margin between the input fields
            }}
          />
          {isSubmitted && username === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
        </div>
        <div>
          <label htmlFor="password" style={{ color: "white" }}>
            Set Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              marginBottom: "10px", // Add margin between the input fields
            }}
          />
          {isSubmitted && password === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
        </div>
        <div>
          <button type="submit" className="addbutton">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addadmin;

