import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Checkoutbox = () => {
    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

  return (
    <div className="curved-rectangle" onClick={()=>{changePage("/checkout")}}>
        <div className='cart-icon'>
           <FaShoppingCart/>
        </div>
        <div>
           <h5>Checkout Order</h5>
        </div>
    </div>
  )
};
export default Checkoutbox;
