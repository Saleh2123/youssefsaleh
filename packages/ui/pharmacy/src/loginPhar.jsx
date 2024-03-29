import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as _trpc from "./_util/trpc";
import * as _pharmacy from "@topp/pharmacy";
import { useGlobalContext } from "./context"

const LoginPhar = () => {
  const _mutation = _trpc.client.profile.logIn.useMutation();
  const { _setUser } = useGlobalContext();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if(password !== "" && username !== ""){
      try {
        const mode = _pharmacy.mode.PHARMACIST;
        await _mutation.mutateAsync({ username, password, mode });
        _setUser({ username, mode })
        changePage("/pharhome");
      } catch (_) {
      }
    }
  };

  return (
    <div>
      <h1 style={{ color: "darkgray" }}>Log into your account</h1>
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
          <label htmlFor="username" style={{ color: "white" }}>
            Enter Username:
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
            Enter Password:
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
          <button className="btn" style={{"color":"wheat"}} onClick={()=>{changePage("/emailph")}}>Forget Password?</button>
        </div>
        <div>
          <button type="submit" className="addbutton">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPhar;

