import { useEffect, useState } from "react";
import { _TARGET } from "../_target";
import ReqModal from "./reqModal";
import Requests from "./requests";
import "../web.css";

const Requestshome = () => {
  const [requests, setRequests] = useState([
    {
      username: "khelo",
      name: "khaled",
      email: "khaled@gmail.com",
      password: "abc",
      dob: "5 jan 2002",
      hourlyRate: 4,
      affiliation: "Magdy hospital",
      education: "abc",
    }]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`${_TARGET}/api/pharmacist/pending/find`, {
        headers: { "content-type": "application/json" },
      });
      const results = await res.json();
      console.log(results);
      setRequests(results);
    };
    get();
  }, []);

  const select = (email) => {
    const request = requests.find((request) => request.email === email);
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <main style={{ "margin-top": "150px" }}>
      <Requests requests={requests} select={select} />
      {showModal && (
        <ReqModal requests={requests} setRequests={setRequests} selectedRequest={selectedRequest} close={setShowModal.bind(null, false)} />
      )}
    </main>
  );
};
export default Requestshome;
