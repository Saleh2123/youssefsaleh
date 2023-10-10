import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Openpage = () =>{
    const navigate = useNavigate()

    const changePage = (exten) =>{
        navigate(exten)
    }

    return(
        <div className="shape-container">
           <button className="custom-shape" onClick={()=>{changePage("/regpa")}}>
               <span>Register as a patient</span>
           </button>
           <h5 style={{color : "white"}}>or</h5>
           <button className="custom-shape" onClick={()=>{changePage("/regph")}}>
               <span>Register as a pharmacist</span>
           </button>
           <h5 style={{color : "white"}}>or</h5>
           <button className="custom-shape" onClick={()=>{changePage("/two")}}>
               <span>Log In</span>
           </button>
        </div>
    )
}
export default Openpage