import React from 'react';
import './cart.css';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const CancelBox = () => {
    const {uniqueMedicines,setCart,CountMedicineInCart,medicines,setMedicines} = useGlobalContext();
    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

    const returnQuantityToStore = ()=>{
        for(let i = 0;i<uniqueMedicines.length;i++){
          let count = CountMedicineInCart(uniqueMedicines[i]);
          for(let j=0;j<medicines.length;j++){
            if(uniqueMedicines[i].name === medicines[j].name){
              medicines[j].quantity+=count;
              break;
            }
          }
        }
        setMedicines(medicines);
      }

    const cancel = ()=>{
        returnQuantityToStore();
        setCart([]);
        changePage("/patienthome");
    }

  return (
    <div className="curverectangle" onClick={cancel}>
        <div>
           <h5>Cancel Order</h5>
        </div>
    </div>
  )
};
export default CancelBox;
