import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";

const PasswordPharmacist = () => {
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

  const handleNewPasswordChange = (e) => {
    setNewpassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if(Cpassword !== "" && Newpassword !== "" && Currentpassword !=="" && Cpassword === Newpassword){
      changePage("/pharhome");
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Change Password</h1>
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
          <label htmlFor="password" style={{ color: "white" }}>
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
        </div>
        <div>
          <label htmlFor="password" style={{ color: "white" }}>
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

