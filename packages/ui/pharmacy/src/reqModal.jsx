import { useGlobalContext } from "./context"
import "./web.css"

const ReqModal = () =>{

    const {selectedRequest, closeModal} = useGlobalContext()
    return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <div className="modal-content">
            <h4>{selectedRequest.name}</h4>
            <p>Username: {selectedRequest.username}</p>
            <p>Email: {selectedRequest.email}</p>
            <p>Password: {selectedRequest.password}</p>
            <p>Date of birth: {selectedRequest.dateofbirth}</p>
            <p>Hourly rate: {selectedRequest.hourlyRate}</p>
            <p>Affiliation: {selectedRequest.affiliation}</p>
            <p>Educational Background: {selectedRequest.educationalBackground}</p>
            <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
        </div>
        </div>
    </aside>
    )
}

export default ReqModal
