import React, { useEffect } from 'react';
import { useGlobalContext } from "../context";
import { useState } from 'react'

const Checkout = () =>{
     const { cart, CountMedicineInCart, total } = useGlobalContext();

     const groupMedicines= ()=> {
      const meds = [];
      for(let i=0;i<cart.length;i++){
        if(meds.indexOf(cart[i]) === -1){
            meds.push(cart[i])
        }
      };
      console.log(meds);
      return meds;
    }

    const [uniqueMedicines,setUniqueMedicines] = useState(groupMedicines());

    useEffect(()=>{
      setUniqueMedicines(groupMedicines());
    },[cart])

    return (
      <div className="cart">
         <h2 style={{"color":"wheat"}}>Payment details</h2>
         {uniqueMedicines.map((medicine,index) => (
           <div className="cart-item">
              <span>{medicine.name}</span>
              <div>
                    <span style={{"color":"black"}}>{medicine.price}</span>
                    <span style={{"color":"black"}}>x{CountMedicineInCart(medicine)}</span>
                    <div style={{"color":"wheat"}}>
                      {medicine.price * CountMedicineInCart(medicine)}
                    </div>
              </div>
         </div>
         ))}
         <div className="cart-item">
              <div>
                    <span style={{"color":"white"}}>Total:</span>
              </div>
              <span style={{"color":"white"}}>{total}{" EGP"}</span>
         </div>
      </div>
    )
}

export default Checkout;
