import { useEffect, useState } from "react";
import { _TARGET } from "../_target";
import * as _trpc from "../_util/trpc";
import "../web.css";

const Pharmacistsview = () => {
  const _mutation = _trpc.client.profile.delete.useMutation();
  const [pharmacists, setPharmacists] = useState([]);

  useEffect(() => {
    const get = async () => {
      const results = await _trpc.vanilla.pharmacist.find.query();
      setPharmacists(results);
    };
    get();
  },[]);

  const removePharmacist = async (id, profileId) => {
    let arr = pharmacists.filter((pharmacist) => pharmacist.id !== id);
    setPharmacists(arr);
    _mutation.mutate({ id: profileId });
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
        <h4 style={{"color":"wheat"}}>No pharmacists.</h4>
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
              <p style={{ color: "white" }}>ID:{pharmacist.id}</p>
              {/* <p style={{ color: "black" }}>Age:{pharmacist.age}</p> */}
              <p style={{ color: "white" }}>Education:{pharmacist.educationalBackground}</p>
            </footer>
            <button
              className="btn btn-sm ml-3 d-inline-block delete-button"
              style={{ "background-color": "gray", color: "black" }}
              onClick={() => removePharmacist(pharmacist.id, pharmacist.profileId)}
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
