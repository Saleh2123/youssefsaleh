import "../web.css";

const ReqModal = ({ selectedRequest, close }) => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h4>{selectedRequest.name}</h4>
          {/* <p>Username: {pharmacist.profile.username}</p> */}
          <p>Email: {selectedRequest.email}</p>
          <p>Date of birth: {selectedRequest.dob}</p>
          <p>Hourly rate: {selectedRequest.hourlyRate}</p>
          <p>Affiliation: {selectedRequest.affiliation}</p>
          <p>Educational Background: {selectedRequest.education}</p>
          <div className="button-container">
            <button className="btn-accept" onClick={close}>Accept</button>
            <button className="btn-reject" onClick={close}>Reject</button>
          </div>
          <button className="btn btn-hipster close-btn" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ReqModal;
