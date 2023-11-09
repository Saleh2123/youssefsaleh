import { useGlobalContext } from "../context"
import { FaShoppingCart } from 'react-icons/fa';
import "./viewcart.css"
import Checkout from "./checkout";
import PlaceOrderbox from "./placeorderbox";

const Checkouthome = () => {
    const { cart } = useGlobalContext();
    return (
        <main>
            <FaShoppingCart className="logo"/>
            <Checkout/>
            {cart.length > 0 && < PlaceOrderbox/>}
        </main>
    )
}
export default Checkouthome
