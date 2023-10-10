import React, { useState } from 'react';
import './register2.css';

const Registerr = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    hourlyRate: '',
    affiliation: '',
    educationalBackground: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can submit the form data to your server here
  };

  return (
    <div className="registration-form-container">
      <h2>Register as a Pharmacist</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <div className="dob-fields">
            <select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleInputChange}
              required
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
              onChange={handleInputChange}
              required
            >
              <option value="">Month</option>
              {[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
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
          <label>Hourly Rate:</label>
          <input
            type="text"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Affiliation (Hospital):</label>
          <input
            type="text"
            name="affiliation"
            value={formData.affiliation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Educational Background:</label>
          <input
            type="text"
            name="educationalBackground"
            value={formData.educationalBackground}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registerr;
