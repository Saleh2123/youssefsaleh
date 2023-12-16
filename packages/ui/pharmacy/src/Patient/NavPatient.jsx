import { Link } from "react-router-dom";
import "./navigate.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import ChatButton from "../All/chatbutton";

const NavPatient = () =>{
    const { setShowlogoutModal, wallet } = useGlobalContext();
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
    }

    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-lights bc">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <ChatButton/>
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-left": "30px","display":"flex"}}>
                    <h6 style={{"color":"white","margin-right":"5px"}}>MY WALLET</h6>
                    <h6 style={{"background-color":"gray","color":"green"}}>{wallet}{" EGP"}</h6>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/orders")}>
                    View Orders
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/passPa")}>
                    Change Password?
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer"}} onClick={()=>setShowlogoutModal(true)}>
                    Log out
                </li>
            </ul>
        </nav>
    )
}
export default NavPatient
