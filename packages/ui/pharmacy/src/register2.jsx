import React, { useState } from "react";
import { _TARGET } from "./_target";
import "./register2.css";

const Registerr = () => {
  const [idDocument, setIdDocument] = useState(null);
  const [degreeDocument, setDegreeDocument] = useState(null);
  const [licenseDocument, setLicenseDocument] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    hourlyRate: "",
    affiliation: "",
    educationalBackground: "",
  });

  const handlePDFChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    if (name === "idDocument") {
      setIdDocument(file);
    } else if (name === "degreeDocument") {
      setDegreeDocument(file);
    } else if (name === "licenseDocument") {
      setLicenseDocument(file);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await fetch(`${_TARGET}/api/auth/register/pharmacist`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="registration-form-container">
      <h2 style={{"color":"darkgray","display": "flex", "justify-content": "center", "align-items": "center"}}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label style={{"color":"wheat"}}>Date of Birth:</label>
          <div className="dob-fields">
            <select name="birthDay" value={formData.birthDay} onChange={handleInputChange} required>
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
              onChange={handleInputChange}
              required
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
              onChange={handleInputChange}
              required
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
        <div className="form-group">
          <label style={{"color":"wheat"}}>Hourly Rate:</label>
          <input
            type="text"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label style={{"color":"wheat"}}>Affiliation (Hospital):</label>
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label style={{"color":"wheat"}}>Educational Background:</label>
          <input
            type="text"
            name="educationalBackground"
            value={formData.educationalBackground}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Three file input buttons for uploading documents */}
        <div className="form-group">
           <label style={{"color":"wheat"}}>Upload ID:</label>
           <input type="file" accept=".pdf" name="idDocument" onChange={handlePDFChange} />
        </div>
        <div className="form-group">
          <label style={{"color":"wheat"}}>Upload Pharmacy Degree:</label>
          <input type="file" accept=".pdf" name="degreeDocument" onChange={handlePDFChange} />
        </div>
        <div className="form-group">
         <label style={{"color":"wheat"}}>Upload Working Licenses:</label>
         <input type="file" accept=".pdf" name="licenseDocument" onChange={handlePDFChange} />
        </div>
        {/* Register button */}
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registerr;
