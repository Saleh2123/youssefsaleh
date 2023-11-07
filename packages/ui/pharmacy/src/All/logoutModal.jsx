import { useGlobalContext } from "../context"
import "./logout.css"
import { useNavigate } from "react-router-dom";

const Logout = () =>{

    const {closelogoutModal} = useGlobalContext()
    const navigate = useNavigate()

    const exit = () =>{
        closelogoutModal()
        navigate("/two")
    }
    return (
    <aside className="modaloverlay">
        <div className="modalcontainer">
        <div className="modalcontent">
            <h4>Log out of your account?</h4>
            <div className="button-container">
            <button className="closebtn" onClick={closelogoutModal}>Cancel</button>
            <button className="closebtn2" onClick={exit}>Log out</button>
            </div>
        </div>
        </div>
    </aside>
    )
}

export default Logout
