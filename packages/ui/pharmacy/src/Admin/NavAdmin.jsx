import { Link } from "react-router-dom";
import "./nav.css"
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const NavAdmin = () =>{
    const { setShowlogoutModal } = useGlobalContext();
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
  }
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-lights bc">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/pharview" style={{"color":"white"}}>View Pharmacists</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/patientsview" style={{"color":"white"}}>View Patients</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/addadmin" style={{"color":"white"}}>Add Adminstrator</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/requestshome" style={{"color":"white"}}>Application requests</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/salesAdm")}>
                    View Sales
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer","margin-right": "10px"}} onClick={()=>changePage("/passA")}>
                    Change Password?
                </li>
                <li className="nav-item" style={{"color":"white", "cursor":"pointer"}} onClick={()=>setShowlogoutModal(true)}>
                    Log out
                </li>
            </ul>
        </nav>
    )
}
export default NavAdmin
