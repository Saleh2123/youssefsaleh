import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import * as _trpc from "../_util/trpc";
import { useGlobalContext } from "../context"

const PasswordPharmacist = () => {
  const _mutation = _trpc.client.profile.updatePassword.useMutation();
  const { _user } = useGlobalContext();

  const [Currentpassword, setCurrentpassword] = useState("");
  const [Newpassword, setNewpassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const location = useLocation();
  // console.log(location.pathname)
  const navigate = useNavigate()

  const changePage = (exten) =>{
        navigate(exten)
  }

  const handlecurrentPasswordChange = (e) => {
    setCurrentpassword(e.target.value);
  };

  const checkPassword = ()=>{
    for(let i=0;i<Newpassword.length;i++){
      if(Newpassword[i] === '0' || Newpassword[i] === '1' || Newpassword[i] === '2' || Newpassword[i] === '3' ||
        Newpassword[i] === '4' || Newpassword[i] === '5' || Newpassword[i] === '6' || Newpassword[i] === '7' ||
        Newpassword[i] === '8' || Newpassword[i] === '9'){
          return true;
      }
    }
    return false;
  }

  const handleNewPasswordChange = (e) => {
    setNewpassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if(Cpassword !== "" && Newpassword !== "" && Currentpassword !=="" && Cpassword === Newpassword && checkPassword() === true){
      _mutation.mutate({ username: _user.username, old: Currentpassword, new: Newpassword });
      changePage("/pharhome");
    }
  };

  return (
    <div>
      <h1 style={{ color: "darkgray" }}>Change Password</h1>
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
            Current password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={Currentpassword}
            onChange={handlecurrentPasswordChange}
            style={{
              marginBottom: "10px", // Add margin between the input fields
            }}
          />
          {isSubmitted && Currentpassword === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
        </div>
        <div>
          <label htmlFor="password" style={{ color: "wheat" }}>
            New password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={Newpassword}
            onChange={handleNewPasswordChange}
            style={{
              marginBottom: "10px", // Add margin between the input fields
            }}
          />
          {isSubmitted && Newpassword === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
          {isSubmitted && Newpassword !== "" && checkPassword() === false && (
            <p className="text-danger">Password must contain at least 1 Number</p>
          )}
        </div>
        <div>
          <label htmlFor="password" style={{ color: "wheat" }}>
            Confirm new password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={Cpassword}
            onChange={handleCPasswordChange}
            style={{
              marginBottom: "10px", // Add margin between the input fields
            }}
          />
          {isSubmitted && Cpassword === "" && (
            <p className="text-danger">Please fill out this field</p>
          )}
          {isSubmitted && Newpassword !== "" && Cpassword !== "" && Cpassword !== Newpassword && (
            <p className="text-danger">You confirmed the wrong password</p>
          )}
        </div>
        <div>
          <button type="submit" className="addbutton">
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordPharmacist;

