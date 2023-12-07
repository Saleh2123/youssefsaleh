import { Link } from "react-router-dom";
import "./navi.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

const NavPharmacist = () =>{
    const { setShowlogoutModal, wallet,notificationsCount } = useGlobalContext();
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
  }
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-lights bcph">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px","display":"flex"}}>
                    <h6 style={{"color":"white","margin-right":"5px"}}>MY WALLET</h6>
                    <h6 style={{"background-color":"gray","color":"green"}}>{wallet}{" EGP"}</h6>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/salesPhar")}>
                    View Sales
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/passPh")}>
                    Change Password?
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer"}} onClick={()=>setShowlogoutModal(true)}>
                    Log out
                </li>
                <li className="nav-item" style={{"cursor":"pointer", "margin-left": "10px"}} onClick={()=>changePage("/noti")}>
                    <FaBell size={24} color="orange" />
                    {notificationsCount > 0 && (
                    <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        background: 'red',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '12px',
                      }}
                    >
                      {notificationsCount}
                    </div>
      )}

                </li>
            </ul>
        </nav>
    )
}
export default NavPharmacist
