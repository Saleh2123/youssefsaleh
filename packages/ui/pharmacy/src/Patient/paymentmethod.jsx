import {useState} from 'react';
import "../web.css";
import { FaMoneyBillWave, FaWallet, FaCreditCard } from 'react-icons/fa';

const PaymentMethod = () =>{
    const [selected, setSelected] = useState("");

    const handleRadioButtonChange = (use) => {
        setSelected(use);
      };

    return(
        <div className='cart'>
            <h2 style={{"color":"wheat"}}>Payment Method</h2>
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
