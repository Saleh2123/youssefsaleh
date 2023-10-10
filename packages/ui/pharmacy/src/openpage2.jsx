import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Openpage2 = () =>{
    const navigate = useNavigate()

    const changePage = (exten) =>{
        navigate(exten)
    }

    return(
        <div className="shape-container">
           <button className="custom-shape" onClick={()=>{changePage("/adminhome")}}>
               <span>Log In as an adminstrator </span>
           </button>
           <h5 style={{color : "white"}}>or</h5>
           <button className="custom-shape" onClick={()=>{changePage("/pharhome")}}>
               <span>Log In as a pharmacist </span>
           </button>
           <h5 style={{color : "white"}}>or</h5>
           <button className="custom-shape" onClick={()=>{changePage("/patienthome")}}>
               <span>Log In as a patient </span>
           </button>
        </div>
    )
}
export default Openpage2