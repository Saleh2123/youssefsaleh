import React from 'react';
import { useState } from 'react';
import "./email.css"

const EmailAd = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const Showmsg = ()=>{
    setShow(true);
  }

  return (
       <div>
        <h1 style={{"color":"white"}}>Find your account</h1>
        <h5 style={{"color":"white"}}>Enter your email address.</h5>
            <div className="form-floating">
                <input id="email" style={{"width":"700px"}}
                type="text" className="form-control" placeholder="email" autoComplete="off"
                value={email} onChange={handleInputChange}></input>
                <label htmlFor="email">Email</label>
            </div>
        <div className="rec" onClick={Showmsg}>
           <div>
              <h5>Find Account</h5>
           </div>
       </div>
       {show && <h5 style={{"color":"green"}}>A verification mail is sent to you</h5>}
       </div>
       );
};

export default EmailAd;
