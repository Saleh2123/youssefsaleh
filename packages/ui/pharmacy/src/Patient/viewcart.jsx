import React from 'react';
import { useGlobalContext } from "../context";
import { useState } from 'react'

const Viewcart = () =>{
     const { cart, CountMedicineInCart } = useGlobalContext();
     const [selectedMedicine,setSelectedMedicine] = useState(cart[0]);

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

    const countMedicines = ()=>{
        let counter = []
        for(let i=0;i<uniqueMedicines.length;i++){
            counter.push(CountMedicineInCart(uniqueMedicines[i]))
        }
        console.log(counter);
        return counter;
    }

    const [uniqueMedicines,setUniqueMedicines] = useState(groupMedicines());
    const [count,setCount] = useState(countMedicines());

    return (
      <div>
        <h1 className='title'>Shopping Cart</h1>
      <div className="cart">
         <h2 style={{"color":"wheat"}}>Cart items</h2>
         {uniqueMedicines.map((medicine,index) => (
           <div className="cart-item">
              <span>{medicine.name}</span>
              <span>X{count[index]}</span>
         </div>
         ))}
      </div>
      </div>
    )
}

export default Viewcart;
