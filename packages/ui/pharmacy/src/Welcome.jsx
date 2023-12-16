import "./openpage.css";
import { useNavigate } from "react-router-dom";

const Welcome = ()=>{
    const navigate = useNavigate()

    const changePage = (exten) =>{
        navigate(exten)
    }
    return(
        <div className="shape-container">
            <h2 style={{"color":"wheat"}}>Welcome to El7a2ni Virtual Pharmacy</h2>
            <img
            src={"https://cdni.iconscout.com/illustration/premium/thumb/online-pharmacy-store-4047421-3351736.png?f=webp"}
            alt = "no"/>
           <button className="custom-shape" onClick={()=>{changePage("/one")}}>
               <span>Get Started!</span>
           </button>
        </div>
    )
}

export default Welcome
