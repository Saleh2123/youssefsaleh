import { Link } from "react-router-dom";
import "./navigate.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const NavPatient = () =>{
    const { setShowlogoutModal } = useGlobalContext();
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
  }

    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-lights bcpa">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <ul className="navbar-nav ml-auto">
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
