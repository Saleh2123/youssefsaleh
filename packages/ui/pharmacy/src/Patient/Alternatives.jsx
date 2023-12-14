import { useGlobalContext } from "../context";
import {useEffect, useState } from "react";
import { FaPlus } from 'react-icons/fa';
import "../web.css";

const Alternatives = () => {
  const { medicines, selectMedicine, addtocart, SelectedMainIngredient, SelectedMed} = useGlobalContext();
  const getAlternatives = ()=>{
    return medicines.filter((med)=>med.ingredients[0] === SelectedMainIngredient);
  }
  const [alternatives] = useState([...getAlternatives()]);

  if (alternatives.length === 0) {
    return (
      <section className="section">
        <h4>No alternatives to {SelectedMed.name}</h4>
      </section>
    );
  }

  return (
    <div>
      <h1 style={{"color":"wheat"}}>
        Alternatives to {SelectedMed.name}
      </h1>
    <section className="section-center">
      {alternatives.map((alternative) => {
        if(alternative.archived === true || alternative.quantity == 0){
          return;
        }
        return (
          <article
            key={alternative.name}
            id={alternative.name}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
             <img
              src={alternative.picture}
              alt={"No"}
              className="img"
              onClick={() => {
                selectMedicine(alternative.name);
              }}
            />
            <footer>
              <h5 style={{ color: "white" }}>{alternative.name}</h5>
              <div className="plus-square">
                <FaPlus style={{ "margin-left": "10px", color: "black", cursor: "pointer" }} onClick={()=>{addtocart(alternative)}}/>
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
