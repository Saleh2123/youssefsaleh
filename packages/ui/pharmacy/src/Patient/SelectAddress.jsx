import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import "../web.css";
import "./viewcart.css"
import "./cart.css"

const SelectAddress = () => {
  const { chosenAddress,setChosenAddress, addresses} = useGlobalContext();
  const navigate = useNavigate()
  const changePage = (exten) =>{
      navigate(exten)
  }
  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }
  if (addresses.length < 1) {
    return (
      <section className="section">
        <h4>No Addresses Added before.</h4>
      </section>
    );
  }

  return (
    <div className="page-container">
        <header >
            <h1 style={{"color":"wheat"}}>Select Delivery Address</h1>
        </header>
    <section className="section-center">
      {addresses.map((address) => {
        return (
          <article
            key={address.telephoneNum}
            id={address.telephoneNum}
            className={address.telephoneNum === chosenAddress.telephoneNum?"singlemeal art":"singlemeal article"}
            style={{ "background-color": "orangered" ,"cursor":"pointer"}}
            onClick={()=>{setChosenAddress(address)}}
            >
            <div className="image-section">
               <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYo1EhO8V3yHFM_xmM2VUHTfkOUcT87AciNg&usqp=CAU"
                 alt="No"
                 className="img"
                />
            </div>
            <footer>
            <div className="icon-container">
                    <FaHome className="address-icon" />
                    <p>{address.neighborhood}{", "}{address.street}{", "}{address.buildingNo}</p>
                </div>
                <div className="icon-container">
                    <FaMapMarkerAlt className="address-icon" />
                    <p>{address.district}{", "}{address.city}{", "}{address.country}</p>
                </div>
                <div className="icon-container">
                    <FaPhone className="address-icon" />
                    <p>{address.telephoneNum}</p>
                </div>
                </footer>
          </article>
        );
      })}
    </section>
    <div className="add-button" onClick={()=>{changePage("/addaddress")}}>
        <FaPlus className="plus-icon" />
      </div>
    </div>
  );
};

export default SelectAddress;

