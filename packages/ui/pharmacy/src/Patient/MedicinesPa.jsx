import { useGlobalContext } from "../context";
import { FaPlus } from 'react-icons/fa';
import "../web.css";

const MedicinesPa = () => {
  const { medicines, selectMedicine, addtocart} = useGlobalContext();

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
        <h4>No medicines matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {medicines.map((medicine) => {
        // console.log(image)
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
              <div className="plus-square" onClick={()=>{addtocart(medicine)}}>
                <FaPlus style={{ "margin-left": "10px", color: "black", cursor: "pointer" }}/>
              </div>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default MedicinesPa;
