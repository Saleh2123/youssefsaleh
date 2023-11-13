import "../email.css"
import "../web.css";
import { useState } from "react";
import { FaMoneyBillWave, FaWallet, FaCreditCard } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const PaymentMethod = () =>{
  let {selected, setSelected, cardNumber, setCardNumber,byCard, byWallet,
    setByWallet, setByCard,setNoMethod,noMethod} = useGlobalContext();

    const handleRadioButtonChange = (use) => {
      if(use === "cc" || use === "cod"){
        setByWallet(false);
      }
      if(use === "w" || use === "cod"){
        setByCard(false);
      }
      setSelected(use);
      setNoMethod(false)
      };

      const handleInputChange = (e) => {
        setCardNumber(e.target.value);
      };

    return(
        <div className='cart'>
            <h2 style={{"color":"wheat"}}>Payment Method</h2>
            {noMethod && (<p style={{"color":"red"}}>*Choose a Payment method</p>)}
        <div>
            <label style={{"font-size":"25px"}}>
              <input
                type="radio"
                value={"w"}
                checked={selected === "w"}
                onChange={() => handleRadioButtonChange("w")}
              />
              {" "}<FaWallet style={{"color":"brown"}}/>{" Wallet"}
            </label>
            {byWallet && (<p style={{"color":"red"}}>*No enough money in your wallet</p>)}
        </div>
        <div>
          <label style={{"font-size":"25px"}}>
             <input
               type="radio"
               value={"cc"}
               checked={selected === "cc"}
               onChange={() => handleRadioButtonChange("cc")}
              />
              {" "}<FaCreditCard style={{"color":"wheat"}}/>{" Credit Card"}
          </label>
        </div>
        {selected === "cc" && (<div className="form-floating">
                <input id="card" style={{"width":"300px"}}
                type="text" className="form-control" placeholder="card" autoComplete="off"
                value={cardNumber} onChange={handleInputChange}></input>
                <label htmlFor="card">Card Number</label>
            </div>)}
        {byCard && cardNumber === '' &&(<p style={{"color":"red"}}>*Please fill out this field</p>)}
        <div>
          <label style={{"font-size":"25px"}}>
             <input
               type="radio"
               value={"cod"}
               checked={selected === "cod"}
               onChange={() => handleRadioButtonChange("cod")}
              />
              {" "}<FaMoneyBillWave style={{"color":"green"}}/>{" Cash on delivery"}
          </label>
        </div>
    </div>
    )
}
export default PaymentMethod;
