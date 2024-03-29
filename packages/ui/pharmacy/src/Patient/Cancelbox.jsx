import React from 'react';
import './cart.css';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const CancelBox = () => {
  const {setShowCancelModal} = useGlobalContext();
    // let {uniqueMedicines,setCart,CountMedicineInCart,medicines,setMedicines,
    // selected,wallet,total,setWallet,setOrders,orders, nextOrderNumber,setNextOrderNumber} = useGlobalContext();

    // const navigate = useNavigate()

    // const changePage = (exten) =>{
    //   navigate(exten)
    // }

    // const returnQuantityToStore = ()=>{
    //     const meds = [...medicines];
    //     for(let i = 0;i<uniqueMedicines.length;i++){
    //       let count = CountMedicineInCart(uniqueMedicines[i]);
    //       for(let j=0;j<medicines.length;j++){
    //         if(uniqueMedicines[i].name === medicines[j].name){
    //           meds[j].quantity+=count;
    //           meds[j].sales-=count;
    //           break;
    //         }
    //       }
    //     }
    //     setMedicines(meds);
    //   }

    // const cancel = ()=>{
    //   if(selected === "w"){
    //     setWallet(wallet + total)
    //     console.log(wallet);
    //   }
    //   returnQuantityToStore();
    //   setOrders(orders.filter((order)=>order.number !== nextOrderNumber-1));
    //   setNextOrderNumber(nextOrderNumber-1);
    //   setCart([]);
    //   changePage("/patienthome");
    // }

  return (
    <div className="curverectangle" onClick={()=>setShowCancelModal(true)}>
        <div>
           <h5>Cancel Order</h5>
        </div>
    </div>
  )
};
export default CancelBox;
