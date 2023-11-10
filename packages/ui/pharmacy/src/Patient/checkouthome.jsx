import { useGlobalContext } from "../context"
import { FaShoppingCart } from 'react-icons/fa';
import "./viewcart.css"
import Checkout from "./checkout";
import PlaceOrderbox from "./placeorderbox";
import Address from "./Address";

const Checkouthome = () => {
    const { cart } = useGlobalContext();

    return (
        <div className="page-container">
          <header>
            <FaShoppingCart className="logotwo" />
            <Address/>
          </header>
          <div>
          <Checkout/>
          </div>
          {cart.length > 0 && <PlaceOrderbox/>}
        </div>
      );
    };

export default Checkouthome
