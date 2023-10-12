import "./web.css";

const ReqModal = ({ selectedRequest: { pharmacist }, close }) => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h4>{pharmacist.name}</h4>
          <p>Username: {pharmacist.profile.username}</p>
          <p>Email: {pharmacist.email}</p>
          <p>Date of birth: {pharmacist.dob}</p>
          <p>Hourly rate: {pharmacist.hourlyRate}</p>
          <p>Affiliation: {pharmacist.affiliation}</p>
          <p>Educational Background: {pharmacist.education}</p>
          <button className="btn btn-hipster close-btn" onClick={close}>
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ReqModal;
