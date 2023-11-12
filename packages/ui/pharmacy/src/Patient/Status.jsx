import { useGlobalContext } from "../context";
import { FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import "../web.css";

const Status = () =>{
    const {chosenAddress} = useGlobalContext();

    return (
        <div>
            <div className="cartwo">
               <div>
               <div className="image-section">
                   <img
                     src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-boy-4047433-3351728.png?f=webp"
                     alt="No"
                     className="img"
                    />
                </div>
                </div>
                <div className="icon-container" style={{"color":"white"}}>
                    <FaTruck className="address-icon" />
                    <span>ETA <h3>17:05</h3></span>
                </div>
                <div className="icon-container" style={{"color":"white"}}>
                    <FaHome className="address-icon" />
                    <p>{chosenAddress.neighborhood}{", "}{chosenAddress.street}{", "}{chosenAddress.buildingNo}</p>
                </div>
                <div className="icon-container" style={{"color":"white"}}>
                    <FaMapMarkerAlt className="address-icon" />
                    <p>{chosenAddress.district}{", "}{chosenAddress.city}{", "}{chosenAddress.country}</p>
                </div>
                <div className="icon-container" style={{"color":"white"}}>
                    <FaPhone className="address-icon" />
                    <p>{chosenAddress.telephoneNum}</p>
                </div>
            </div>
        </div>
    )
}

export default Status;
