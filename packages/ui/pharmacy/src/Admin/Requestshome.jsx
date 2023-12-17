import { useEffect, useState } from "react";
import { _TARGET } from "../_target";
import ReqModal from "./reqModal";
import Requests from "./requests";
import { useGlobalContext } from "../context"
import * as _trpc from "../_util/trpc";
import "../web.css";

const Requestshome = () => {
  const { requests, _setRequests } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const get = async () => {
      const results = await _trpc.vanilla.pharmacist.applications.query();
      _setRequests(results);
    };
    get();
  }, [_setRequests]);

  const select = (email) => {
    const request = requests.find((request) => request.email === email);
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <main style={{ "margin-top": "150px" }}>
      <Requests requests={requests} select={select} />
      {showModal && (
        <ReqModal requests={requests} setRequests={_setRequests} selectedRequest={selectedRequest} close={setShowModal.bind(null, false)} />
      )}
    </main>
  );
};
export default Requestshome;
