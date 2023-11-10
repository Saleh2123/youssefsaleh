import { useGlobalContext } from "../context";
import { FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import "../web.css";
import { useNavigate } from "react-router-dom";

const Address = () =>{
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
    }
    const {chosenAddress} = useGlobalContext();

    return (
        <div>
            <div className='above'>
               <h4>Delivery Address</h4>
               <button className='bt' onClick={()=>{changePage("/seladdress")}}>Change</button>
            </div>
            <div className="cart">
               <div>
               <h2 style={{"color":"wheat"}}>Address details</h2>
               <div className="image-section">
                   <img
                     src="https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_640.png"
                     alt="No"
                     className="img"
                    />
                </div>
                </div>
                <div className="icon-container">
                    <FaHome className="address-icon" />
                    <p>{chosenAddress.neighborhood}{", "}{chosenAddress.street}{", "}{chosenAddress.buildingNo}</p>
                </div>
                <div className="icon-container">
                    <FaMapMarkerAlt className="address-icon" />
                    <p>{chosenAddress.district}{", "}{chosenAddress.city}{", "}{chosenAddress.country}</p>
                </div>
                <div className="icon-container">
                    <FaPhone className="address-icon" />
                    <p>{chosenAddress.telephoneNum}</p>
                </div>
            </div>
        </div>
    )
}

export default Address;
