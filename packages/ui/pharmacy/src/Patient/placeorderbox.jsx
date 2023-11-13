import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const PlaceOrderbox = () => {
    let {medicines,setMedicines,CountMedicineInCart,uniqueMedicines, selected
    , setByCard, cardNumber,setByWallet,wallet,setWallet, total} = useGlobalContext();

    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

    const removeQuantityFromStore = ()=>{
      for(let i = 0;i<uniqueMedicines.length;i++){
        let count = CountMedicineInCart(uniqueMedicines[i]);
        for(let j=0;j<medicines.length;j++){
          if(uniqueMedicines[i].name === medicines[j].name){
            medicines[j].quantity-=count;
            break;
          }
        }
      }
      setMedicines(medicines);
    }

    const ordernow = ()=>{
      if(selected === "w" && total > wallet){
        setByWallet(true);
      }
      else if(selected === "cc" && cardNumber === ''){
        setByCard(true);
      }
      else if(selected === "w" || selected === "cc" || selected === "cod"){
        if(selected === "w" && wallet >= total){
          wallet-=total;
          setWallet(wallet)
          console.log(wallet);
        }
        removeQuantityFromStore();
        changePage("/order");
      }
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
