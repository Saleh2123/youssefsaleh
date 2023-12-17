import React, { useState } from "react";
import { _TARGET } from "../_target";
import { useNavigate } from "react-router-dom";
import * as _pharmacy from "@topp/pharmacy";
import * as _trpc from "../_util/trpc";

const Addadmin = () => {
  const _mutation = _trpc.client.profile.create.useMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  const changePage = (exten) =>{
        navigate(exten)
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkPassword = ()=>{
    for(let i=0;i<password.length;i++){
      if(password[i] === '0' || password[i] === '1' || password[i] === '2' || password[i] === '3' ||
      password[i] === '4' || password[i] === '5' || password[i] === '6' || password[i] === '7' ||
      password[i] === '8' || password[i] === '9'){
          return true;
      }
    }
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if(password !== "" && checkPassword() === true){
      _mutation.mutate({ username, password, mode: _pharmacy.mode.ADMIN });
      changePage("/adminhome");
    }
  };

  return (
    <div>
      <h1 style={{ color: "darkgray" }}>Add New Administrator</h1>
      <form
        style={{
          border: "3px solid darkgray",
          padding: "50px",
          width: "300px",
          margin: "20px auto",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username" style={{ color: "wheat" }}>
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
          <label htmlFor="password" style={{ color: "wheat" }}>
            Set Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              marginBottom: "10px",
            }}
          />
          {isSubmitted && password === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
          {isSubmitted && password !== "" && checkPassword() === false && (
            <p className="text-danger">Password must contain at least 1 Number</p>
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

