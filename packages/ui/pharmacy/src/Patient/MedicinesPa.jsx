import { useGlobalContext } from "../context";
import { FaPlus } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import "../web.css";
import { useNavigate } from "react-router-dom";

const MedicinesPa = () => {
  const { medicines, selectMedicine, addtocart, setSelectedMainIngredient,setSelectedMed} = useGlobalContext();
  const navigate = useNavigate()

    const changePage = (exten) =>{
          navigate(exten)
    }

    if (medicines.length < 1) {
      return (
        <section className="section">
          <h4>No medicines matched your search term. Please try again.</h4>
        </section>
      );
    }

  const showAlternatives =(medicine)=>{
    setSelectedMainIngredient(medicine.ingredients[0]);
    setSelectedMed(medicine);
    changePage("/alternativeshome");
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
              <h5 style={{ color: "white" }}>{medicine.name}</h5>
              <div className="plus-square">
                {medicine.quantity == 0?
                <FontAwesomeIcon icon={faExchangeAlt} style={{ "margin-left": "10px", color: "darkblue", cursor: "pointer" }} onClick={()=>{showAlternatives(medicine)}}/>:
                <FaPlus style={{ "margin-left": "10px", color: "black", cursor: "pointer" }} onClick={()=>{addtocart(medicine)}}/>}
              </div>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default MedicinesPa;
