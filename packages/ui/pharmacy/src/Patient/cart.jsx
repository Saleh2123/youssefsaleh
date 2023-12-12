import React, { useEffect } from 'react';
import { useGlobalContext } from "../context";
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const Cart = () =>{
     const { cart, CountMedicineInCart,addtocart ,removefromcart, removeAllfromcart, uniqueMedicines } = useGlobalContext();

    //  const groupMedicines= ()=> {
    //   const meds = [];
    //   for(let i=0;i<cart.length;i++){
    //     if(meds.indexOf(cart[i]) === -1){
    //         meds.push(cart[i])
    //     }
    //   };
    //   console.log(meds);
    //   return meds;
    // }

    // const [uniqueMedicines,setUniqueMedicines] = useState(groupMedicines());

    // useEffect(()=>{
    //   setUniqueMedicines(groupMedicines());
    // },[cart])

    return (
      <div>
        <h1 className='title'>Shopping Cart</h1>
      <div className="cart">
         <h2 style={{"color":"wheat"}}>Cart items</h2>
         {uniqueMedicines.map((medicine,index) => (
           <div className="cart-item">
              <span>{medicine.name}</span>
              <div>
                 <button className='btn' onClick={()=>{removeAllfromcart(medicine)}}>remove All</button>
                 <div className='square' onClick={()=>{removefromcart(medicine)}}>
                   <FaMinus/>
                 </div>
                 <span style={{"color":"black"}}>x{CountMedicineInCart(medicine)}</span>
                 <div className='square' onClick={()=>{addtocart(medicine)}}>
                  <FaPlus/>
                 </div>
              </div>
         </div>
         ))}
      </div>
      </div>
    )
}

export default Cart;
