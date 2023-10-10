import { useGlobalContext } from "./context"
import "./web.css"

const ModalPhar = () =>{

    const {selectedMedicine, closeModal} = useGlobalContext()
    return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <img src={selectedMedicine.picture} alt ="No" className="img modal-img"/>
        <div className="modal-content">
            <h4>{selectedMedicine.Name}</h4>
            <p>{selectedMedicine.description}</p>
            <p>Price: {selectedMedicine.price}</p>
            <p>Quantity: {selectedMedicine.quantity}</p>
            <p>Sales: {selectedMedicine.sales}</p>
            <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
        </div>
        </div>
    </aside>
    )
}

export default ModalPhar