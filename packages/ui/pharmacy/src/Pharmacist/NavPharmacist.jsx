import { Link } from "react-router-dom";
import "./navi.css"
import { useGlobalContext } from "../context";

const NavPharmacist = () =>{
    const { setShowlogoutModal } = useGlobalContext();
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-lights bcph">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{"color":"white", "cursor":"pointer"}} onClick={()=>setShowlogoutModal(true)}>
                    Log out
                </li>
            </ul>
        </nav>
    )
}
export default NavPharmacist
