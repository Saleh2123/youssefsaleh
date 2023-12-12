import { useGlobalContext } from "../context";
import { FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Orders = () =>{
    const { orders, groupMedicines, CountMedicineInCartTwo, calculateTotalInCart} = useGlobalContext();

    return (
        <div className="page-container">
            <header >
                <h1 style={{"color":"wheat"}}>Check your Orders</h1>
            </header>
        <section className="section-center">
          {orders.map((order) => {
            return (
            <article
                key={order.number}
                id={order.number}
                className={order.number === 7?"singlemeal art":"singlemeal article"}
                style={{ "background-color": "orangered" ,"cursor":"pointer"}}
                >
                <div className="image-section">
                   <img
                     src="https://media.istockphoto.com/id/1170763624/vector/ordering-food-using-online-mobile-application.jpg?s=612x612&w=0&k=20&c=JwM2JxQqF-1z1c4hb0fRL4F_EBlKRGvcUDI2r6dS--k="
                     alt="No"
                     className="img"
                    />
                </div>
                <footer style={{"color":"wheat","display": "block","align-items":"center"}}>
                    <div>
                        <h4>{`Order #${order.number}`}</h4>
                    </div>
                    <div>
                        {groupMedicines(order.cart).map((medicine) => (
                            <div className="cart-item">
                                <span>{medicine.name}</span>
                                <div>
                                  <span style={{"color":"black"}}>{medicine.price}</span>
                                  <span style={{"color":"black"}}>x{CountMedicineInCartTwo(medicine,order.cart)}</span>
                                  <div style={{"color":"wheat"}}>
                                    {medicine.price * CountMedicineInCartTwo(medicine,order.cart)}
                                  </div>
                                </div>
                            </div>
                         ))}
                        <div className="cart-item">
                           <div>
                           <span style={{"color":"white"}}>Total:</span>
                        </div>
                           <span style={{"color":"white"}}>{calculateTotalInCart(order.cart)}{" EGP"}</span>
                        </div>
                    </div>
                    <div style={{"color":"black"}}>
                    <div className="icon-container">
                        <FaHome className="address-icon" />
                        <p>{order.address.neighborhood}{", "}{order.address.street}{", "}{order.address.buildingNo}</p>
                    </div>
                    <div className="icon-container">
                        <FaMapMarkerAlt className="address-icon" />
                        <p>{order.address.district}{", "}{order.address.city}{", "}{order.address.country}</p>
                    </div>
                    <div className="icon-container">
                        <FaPhone className="address-icon" />
                        <p>{order.address.telephoneNum}</p>
                    </div>
                    </div>
                </footer>
            </article>
            );
          })}
        </section>
        </div>
      )
}
export default Orders;
