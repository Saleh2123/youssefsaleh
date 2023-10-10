import { useGlobalContext } from "./context";
import "./web.css";
import { useState } from "react";

const FilterModal = () => {
  const { medicines, setMedicines, closeFilterModal, Allmedicines } = useGlobalContext();
  const [selectedUse, setSelectedUse] = useState('');

  const getuses = ()=>{
    let uses = [];
    medicines.forEach((medicine) => {
        if (uses.indexOf(medicine.use) === -1) {
            uses.push(medicine.use);
        }
        });
    return uses    
}
  const [uniqueUses] = useState(getuses())

  const handleRadioButtonChange = (use) => {
    setSelectedUse(use);
  };

  const filter = () => {
    if(selectedUse === ''){
        setMedicines(Allmedicines)
    }
    else{
        let arr
        arr = medicines.filter((medicine)=>
        medicine.use === selectedUse
        )
        setMedicines(arr)
    }
    closeFilterModal()
  };

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          {uniqueUses.map((use, index) => {
            return (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={use}
                    checked={selectedUse === use}
                    onChange={() => handleRadioButtonChange(use)}
                  />
                  {use}
                </label>
              </div>
            );
          })}
          <button className="btn btn-hipster filter-btn" onClick={filter}> Filter </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterModal;
