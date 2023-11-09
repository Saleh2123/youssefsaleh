import { useGlobalContext } from "../context"
import Viewcart from "./viewcart"
import { FaShoppingCart } from 'react-icons/fa';
import "./viewcart.css"
import Checkoutbox from "./checkoutbox";

const Viewcarthome = () => {
    const { cart } = useGlobalContext();
    return (
        <main>
            <FaShoppingCart className="logo"/>
            <Viewcart/>
            {cart.length > 0 && < Checkoutbox/>}
        </main>
    )
}
export default Viewcarthome
