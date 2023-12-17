import { useGlobalContext } from "../context";
import "../web.css";

const Medicines = () => {
  const { medicines, selectMedicine } = useGlobalContext();

  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }
  if (medicines.length < 1) {
    return (
      <section className="section">
        <h4 style={{"color":"wheat"}}>No medicines Available In Pharmacy yet.</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {medicines.map((medicine) => {
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
              <h5 style={{ color: "white" }}>{medicine.name}</h5>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Medicines;
