import { useGlobalContext } from "../context";
import { FaPlus } from 'react-icons/fa';
import "../web.css";

const Alternatives = () => {
  const { medicines, selectMedicine, addtocart, SelectedMainIngredient, SelectedMed} = useGlobalContext();

//   if (medicines.length < 1) {
//     return (
//       <section className="section">
//         <h4>No medicines matched your search term. Please try again.</h4>
//       </section>
//     );
//   }

  return (
    <div>
      <h1 style={{"color":"wheat"}}>
        Alternatives to {SelectedMed.name}
      </h1>
    <section className="section-center">
      {medicines.map((medicine) => {
        if(medicine.archived === true || medicine.quantity == 0 || medicine.ingredients[0] !== SelectedMainIngredient){
          return;
        }
        return (
          <article
            key={medicine.name}
            id={medicine.name}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
             <img
              src={medicine.picture}
              alt={"No"}
              className="img"
              onClick={() => {
                selectMedicine(medicine.name);
              }}
            />
            <footer>
              <h5 style={{ color: "white" }}>{medicine.name}</h5>
              <div className="plus-square">
                <FaPlus style={{ "margin-left": "10px", color: "black", cursor: "pointer" }} onClick={()=>{addtocart(medicine)}}/>
              </div>
            </footer>
          </article>
        );
      })}
    </section>
    </div>
  );
};

export default Alternatives;
