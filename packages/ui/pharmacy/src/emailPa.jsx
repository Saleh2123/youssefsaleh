import React from 'react';
import "./email.css";
import { useState } from 'react';

const EmailPa = () => {
    const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="form-group">
      <label className={email ? 'shrink' : ''} htmlFor="emailField">
        Enter your email
      </label>
      <input
        type="email"
        className="form-control rounded"
        id="emailField"
        placeholder=" "
        value={email}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EmailPa;
