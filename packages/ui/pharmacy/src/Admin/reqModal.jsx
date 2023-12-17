import * as _trpc from "../_util/trpc";
import "../web.css";

const ReqModal = ({ requests,setRequests,selectedRequest, close }) => {
  const ACCEPT = 0;
  const REJECT = 1;

  const mutations = {
    [ACCEPT]: _trpc.client.pharmacist.accept.useMutation(),
    [REJECT]: _trpc.client.pharmacist.reject.useMutation(),
  };

  const removeRequest = (_request, action)=>{
    mutations[action].mutate({ id: selectedRequest.id });
    setRequests(requests.filter((req)=>req.username !== selectedRequest.username));
    close();
  }

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h4>{selectedRequest.name}</h4>
          {/* <p>Username: {pharmacist.profile.username}</p> */}
          <p>Email: {selectedRequest.email}</p>
          <p>Date of birth: {selectedRequest.dateofbirth}</p>
          <p>Hourly rate: {selectedRequest.hourlyRate}</p>
          <p>Affiliation: {selectedRequest.affiliation}</p>
          <p>Educational Background: {selectedRequest.educationalBackground}</p>
          { selectedRequest.degreeDocument && <iframe src={selectedRequest.degreeDocument}></iframe> }
          { selectedRequest.idDocument && <iframe src={selectedRequest.idDocument}></iframe> }
          { selectedRequest.licenseDocument && <iframe src={selectedRequest.licenseDocument}></iframe> }
          <div className="button-container">
            <button className="btn-accept" onClick={()=>removeRequest(selectedRequest, ACCEPT)}>Accept</button>
            <button className="btn-reject" onClick={()=>removeRequest(selectedRequest, REJECT)}>Reject</button>
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
