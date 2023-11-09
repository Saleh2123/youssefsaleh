import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { total } = useGlobalContext();
    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

  return (
    <div className="curved-rectangle" onClick={()=>{changePage("/viewcart")}}>
        <div className='cart-icon'>
           <FaShoppingCart/>
        </div>
        <div className="vertical-words">
           <h5>view cart</h5>
           <h4>Pharmacy shop</h4>
        </div>
        <h5 className="cart-price">{total} EGP</h5>
    </div>
  )
};
export default Cart;
