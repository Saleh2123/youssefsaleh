import { useEffect, useState } from "react";
import { _TARGET } from "./_target";
import "./web.css";

const Patientsview = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`${_TARGET}/api/patient/find`, {
        headers: { "content-type": "application/json" },
      });
      const results = await res.json();
      console.log(results);
      setPatients(results);
    };
    get();
  }, []);

  const removePatient = async (id, profileId) => {
    let arr = patients.filter((patient) => patient.id !== id);
    setPatients(arr);
    await fetch(`${_TARGET}/api/profile/delete`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ id: profileId }),
    });
  };

  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }
  if (patients.length < 1) {
    return (
      <section className="section">
        <h4>No patients.</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {patients.map((patient) => {
        // console.log(image)
        return (
          <article
            key={patient.id}
            id={patient.id}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
            <h2 style={{ color: "white" }}>Patient Name: {patient.name}</h2>
            <footer>
              <p style={{ color: "black" }}>ID:{patient.id}</p>
              {/* <p style={{ color: "black" }}>Age:{patient.age}</p> */}
              <p style={{ color: "black" }}>reason:{patient.reason}</p>
            </footer>
            <button
              className="btn btn-sm ml-3 d-inline-block delete-button"
              style={{ "background-color": "gray", color: "black" }}
              onClick={() => removePatient(patient.id, patient.profileId)}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Patientsview;
