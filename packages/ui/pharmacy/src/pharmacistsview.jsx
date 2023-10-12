import { useEffect, useState } from "react";
import { _TARGET } from "./_target";
import "./web.css";

const Pharmacistsview = () => {
  const [pharmacists, setPharmacists] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`${_TARGET}/api/pharmacist/accepted/find`, {
        headers: { "content-type": "application/json" },
      });
      const results = await res.json();
      console.log(results);
      setPharmacists(results);
    };
    get();
  }, []);

  const removePharmacist = async (id, profileId) => {
    let arr = pharmacists.filter((pharmacist) => pharmacist.id !== id);
    setPharmacists(arr);
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
  if (pharmacists.length < 1) {
    return (
      <section className="section">
        <h4>No pharmacists.</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {pharmacists.map((pharmacist) => {
        // console.log(image)
        return (
          <article
            key={pharmacist.id}
            id={pharmacist.id}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
            <h2 style={{ color: "white" }}>Pharmacist Name: {pharmacist.name}</h2>
            <footer>
              <p style={{ color: "black" }}>ID:{pharmacist.id}</p>
              {/* <p style={{ color: "black" }}>Age:{pharmacist.age}</p> */}
              <p style={{ color: "black" }}>Education:{pharmacist.education}</p>
            </footer>
            <button
              className="btn btn-sm ml-3 d-inline-block delete-button"
              style={{ "background-color": "gray", color: "black" }}
              onClick={() => removePharmacist(pharmacist.id, pharmacist.pharmacist.profile.id)}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Pharmacistsview;
