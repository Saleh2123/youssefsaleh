import React from 'react';
import { useState } from 'react';

const EmailPa = () => {
    const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-50 p-5 rounded mx-auto">
            <div className="form-floating">
                <input style={{backgroundColor: "rgba(145, 158, 171, 0.04)"}} id="search"
                type="text" className="form-control" placeholder="Search" autoComplete="off"
                value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label htmlFor="search">Search</label>
            </div>
        </div>
  );
};

export default EmailPa;
