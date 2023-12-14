import { useGlobalContext } from "../context"
import Modal from "../All/Modal"
import "../web.css"
import Cartbox from "./cartbox"
import Alternatives from "./Alternatives"

const Alternativeshome = () => {
    const {showModal, cart} = useGlobalContext()
    return (
        <main style={{"margin-top": "100px"}}>
        <Alternatives />
        {cart.length > 0 && < Cartbox/>}
        {showModal && <Modal />}
        </main>
    )
}
export default Alternativeshome
