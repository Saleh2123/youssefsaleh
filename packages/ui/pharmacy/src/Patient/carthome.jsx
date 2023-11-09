import { useGlobalContext } from "../context"
import Cart from "./cart";
import { FaShoppingCart } from 'react-icons/fa';
import "./viewcart.css"
import Checkoutbox from "./checkoutbox";

const Carthome = () => {
    const { cart } = useGlobalContext();
    return (
        <main>
            <FaShoppingCart className="logo"/>
            <Cart/>
            {cart.length > 0 && < Checkoutbox/>}
        </main>
    )
}
export default Carthome
