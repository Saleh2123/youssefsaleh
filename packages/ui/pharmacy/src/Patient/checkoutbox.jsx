import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const Checkoutbox = () => {
    const navigate = useNavigate()
    const { total} = useGlobalContext();

    const changePage = (exten) =>{
      navigate(exten)
    }

  return (
    <div className="curved-rectangle" onClick={()=>{changePage("/checkout")}}>
        <div className='cart-icon'>
           <FaShoppingCart/>
        </div>
        <div>
           <h5>Checkout Now</h5>
        </div>
        <h5 className="cart-price">{total} EGP</h5>
    </div>
  )
};
export default Checkoutbox;
