import React from 'react';
import './cart.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';
import * as _trpc from "../_util/trpc";

const PlaceOrderbox = () => {
  const _mutation = _trpc.client.patient.setWallet.useMutation();

    let {medicines,setMedicines,CountMedicineInCart,uniqueMedicines, selected
    , setByCard, cardNumber,setByWallet,wallet,setWallet, total,setNoMethod, cart, chosenAddress,
    nextOrderNumber,setNextOrderNumber, orders,setOrders, _user} = useGlobalContext();

    const navigate = useNavigate()

    const changePage = (exten) =>{
      navigate(exten)
    }

    const removeQuantityFromStore = ()=>{
      const meds = [...medicines];
      for(let i = 0;i<uniqueMedicines.length;i++){
        let count = CountMedicineInCart(uniqueMedicines[i]);
        for(let j=0;j<medicines.length;j++){
          if(uniqueMedicines[i].name === medicines[j].name){
            meds[j].quantity-=count;
            meds[j].sales+=count;
            break;
          }
        }
      }
      console.log(medicines);
      setMedicines(meds);
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
          const _wallet = wallet - total;
          _mutation.mutate({ username: _user.username, wallet: _wallet });
          setWallet(_wallet);
        }
        removeQuantityFromStore();
        setOrders([...orders,{
          number: nextOrderNumber,
          cart: cart,
          address: chosenAddress
        }])
        setNextOrderNumber(nextOrderNumber+1);
        changePage("/order");
      }
      else{
        setNoMethod(true);
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
