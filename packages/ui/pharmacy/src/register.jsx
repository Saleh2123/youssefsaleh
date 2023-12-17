import React, { useState } from "react";
import "./register.css"; // Import your custom CSS for the form styles
import * as _trpc from "./_util/trpc";

const Register = () => {
  const _mutation = _trpc.client.patient.register.useMutation();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "male",
    mobileNumber: "",
    emergencyContact: {
      fullName: "",
      relation: "",
      emergencyMobile: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      emergencyContact: {
        ...formData.emergencyContact,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    _mutation.mutate(formData);
  };

  return (
    <div className="registration-form-container">
      <h2 style={{"color":"darkgray","display": "flex", "justify-content": "center", "align-items": "center"}}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Date of Birth:</label>
              <div className="dob-fields">
                <select
                  name="birthDay"
                  value={formData.birthDay}
                  onChange={handleDOBChange}
                  required
                  style={{ width: "90px" }}
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <select
                  name="birthMonth"
                  value={formData.birthMonth}
                  onChange={handleDOBChange}
                  required
                  style={{ width: "90px" }}
                >
                  <option value="">Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleDOBChange}
                  required
                  style={{ width: "90px" }}
                >
                  <option value="">Year</option>
                  {Array.from({ length: 44 }, (_, i) => (
                    <option key={i} value={1980 + i}>
                      {1980 + i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Emergency Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.emergencyContact.fullName}
                onChange={handleEmergencyContactChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Relation to Patient:</label>
              <input
                type="text"
                name="relation"
                value={formData.emergencyContact.relation}
                onChange={handleEmergencyContactChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label style={{"color":"wheat"}}>Emergency Mobile Number:</label>
              <input
                type="text"
                name="emergencyMobile"
                value={formData.emergencyContact.emergencyMobile}
                onChange={handleEmergencyContactChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
