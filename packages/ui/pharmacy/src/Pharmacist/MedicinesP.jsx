import { FaEdit } from "react-icons/fa";
import { useGlobalContext } from "../context";
import * as _trpc from "../_util/trpc";
import "../web.css";

const MedicinesP = () => {
  const _mutation = _trpc.client.medicine.archive.useMutation();

  const { medicines, selectMedicine, setShowAddMediModal, editMedicine, addToArchivedMeds} = useGlobalContext();

  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }

  if(medicines.length < 1){
      return (
          <section className="section">
              <h4 style={{"color":"wheat"}}>No medicines Available In Pharmacy yet.</h4>
          </section>
      )
  }
  return (
    <section className="section-center">
      {medicines.map((medicine) => {
        if(medicine.archived === true){
          return;
        }
        return (
          <article
            key={medicine.name}
            id={medicine.name}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
            {medicine.quantity == 0?
            <img
            src={"https://assets-global.website-files.com/6226c4ffcb6d6446cdc96a84/62bc932b2a2231544be5a373_2fe3e76a66d4105790a62f68d8e5622a_M.jpeg"}
            alt={"No"}
            className="img"
            onClick={() => {
              selectMedicine(medicine.name);
            }}
          />
             :
             <img
              src={medicine.picture}
              alt={"No"}
              className="img"
              onClick={() => {
                selectMedicine(medicine.name);
              }}
            />
              }
            <footer>
              <h5 className="arch" onClick={()=>{
                _mutation.mutate({ id: medicine.id, archived: true });
                addToArchivedMeds(medicine);
              }}>{medicine.name}</h5>
              <FaEdit
                style={{ "margin-left": "10px", color: "white", cursor: "pointer" }}
                onClick={() => {
                  editMedicine(medicine.name);
                }}
              />
            </footer>
          </article>
        );
      })}
      <article className="single-meal" style={{ "background-color": "darkred" }}>
        <img
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8aGhoAAADk5OTh4eEbGxuFhYWIiIj8/PwYGBgLCwvo6OgWFhbGxsakpKSCgoJqampvb2+Tk5PS0tLExMSgoKBlZWWSkpKampoQEBDT09PMzMxC6WveAAACmklEQVR4nO3d0W6jMBBAUXuoE0NIQtJuNl3+/z/XoLZvW2yUqYfsPa+NkG8MUSVG4BwAAAAAAAAAAAAAAAAAPEKMtVegLRXGt+vuW+frccPfQ3S/OlmQPtCfai90nZgM0vtFoZfBbXQfzxKWA30IQc61l7pGdKNk9M2FXl5rL3eVW5dVOOlutRe7Rsy4Bj+30fstXohN3kk6ab0cai93hZf8Qu+lqb3cFSik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+zZZWDROWVIYiqZNFGdvpkPH5iXPsWQPuzHzsI3uaFF0461fmqf8mqvMGdv72MK0ibn6QW8GLk7Thl3uLFdbsIMl+m6aZFTZyXQRDqK17hKtDDqnanQnCflnnpZ0RntRmiqOJnZw0nc6m3jMGvn9CUGOKlfi75Kff03pNL2rFO6sFKZ/gfYKfRT+KAoppLA+CimksD4KKaSwPgoppLA+CimksD4KKaSwPgop/Ie9lcIQUuFT33uaCzVcrRR6rfuHb+IN3Mef6dwDjq5rjRS274/Pm5mYxZhozWI4N8g87PF4JUcNXi5agdPPaRdyR05Kvok298PtNBO105tti+7P4LMn0AoKQ/a0nPjLq+p0Yjr4oclyGPMf1zbNJuYeVrOtUMHTzDxPM7OJQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4K/6vC8PyF/SYLn3/aJPrsFyCGPmzw/YfRDfnPM9OcxVM0Sp+ZGDb6HlJ3Fr80VTz/Ociu9lJXipfF9wFPL5Jt5bLBq/DDafGdzsn7SXmcUk9adjze99+7j5+fhU1xaXPi879iHgAAAAAAAAAAAAAAADDkL1oyOtIuPG8iAAAAAElFTkSuQmCC"
          }
          alt={"No"}
          className="img"
          onClick={() => setShowAddMediModal(true)}
        />
        <footer style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
          <h5 style={{"color":"white"}}>Add medicine</h5>
        </footer>
      </article>
    </section>
  );
};

export default MedicinesP;
