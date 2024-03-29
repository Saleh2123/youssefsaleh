import { useGlobalContext } from "../context"
import "../All/logout.css"
import { useNavigate } from "react-router-dom";
import * as _trpc from "../_util/trpc";

const CancelModal = () =>{
  const _mutation = _trpc.client.patient.setWallet.useMutation();

    const navigate = useNavigate();
    let {setShowCancelModal,uniqueMedicines,setCart,CountMedicineInCart,medicines,setMedicines,
        selected,wallet,total,setWallet,setOrders,orders, nextOrderNumber,setNextOrderNumber, _user} = useGlobalContext();

        const changePage = (exten) =>{
          navigate(exten)
        }

        const returnQuantityToStore = ()=>{
            const meds = [...medicines];
            for(let i = 0;i<uniqueMedicines.length;i++){
              let count = CountMedicineInCart(uniqueMedicines[i]);
              for(let j=0;j<medicines.length;j++){
                if(uniqueMedicines[i].name === medicines[j].name){
                  meds[j].quantity+=count;
                  meds[j].sales-=count;
                  break;
                }
              }
            }
            setMedicines(meds);
          }

        const cancel = ()=>{
          if(selected !== "cod"){
            const _wallet = wallet + total;
            _mutation.mutate({ username: _user.username, wallet: _wallet });
            setWallet(_wallet)
          }
          returnQuantityToStore();
          setOrders(orders.filter((order)=>order.number !== nextOrderNumber-1));
          setNextOrderNumber(nextOrderNumber-1);
          setCart([]);
          setShowCancelModal(false);
          changePage("/patienthome");
        }


    return (
    <aside className="modaloverlay">
        <div className="modalcontainer">
        <div className="modalcontent">
            <h4>Cancelling your order?</h4>
            <div className="button-container">
            <button className="closebtn2" onClick={cancel}>Yes</button>
            <button className="closebtn" onClick={()=>setShowCancelModal(false)}>No</button>
            </div>
        </div>
        </div>
    </aside>
    )
}

export default CancelModal
