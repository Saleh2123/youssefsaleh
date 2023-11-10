import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const PlaceOrderbox = () => {
    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

    const ordernow = ()=>{
      changePage("/order");
    }

  return (
    <div className="curvedrectangle" onClick={ordernow}>
        <div className='cart-icon'>
           <FaShoppingCart/>
        </div>
        <div>
           <h5>Place Order</h5>
        </div>
    </div>
  )
};
export default PlaceOrderbox;
