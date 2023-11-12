import "../web.css"
import Order from "./Order"
import Status from "./Status"
import CancelBox from "./Cancelbox"
import { useGlobalContext } from "../context"

const Orderhome = () => {
    const {cart} = useGlobalContext();
    return (
        <div className="page-container">
            <header>
               <Status/>
            </header>
            <div>
               <Order/>
            </div>
            {cart.length > 0 && <CancelBox/>}
        </div>
    )
}
export default Orderhome
