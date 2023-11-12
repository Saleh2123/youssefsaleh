import { useGlobalContext } from "../context";

const Order = () =>{
    const {uniqueMedicines, CountMedicineInCart, total} = useGlobalContext();
    return (
        <div>
      <div className="cart">
         <h2 style={{"color":"wheat","display": "flex","justify-content": "center","align-items": "center"}}>Order Details</h2>
         {uniqueMedicines.map((medicine) => (
           <div className="cart-item">
              <div>
                  <h4>{medicine.name}</h4>
                  <p>{medicine.description}</p>
                  <span>{medicine.use}</span>
              </div>
              <div>
                 <span style={{"color":"black"}}>x{CountMedicineInCart(medicine)}</span>
                 <div>
                 <span style={{"color":"black"}}>{medicine.price}</span>
                    <span style={{"color":"black"}}>x{CountMedicineInCart(medicine)}</span>
                    <div style={{"color":"wheat"}}>
                      {medicine.price * CountMedicineInCart(medicine)}{" EGP"}
                    </div>
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
      </div>
    )
}
export default Order;
