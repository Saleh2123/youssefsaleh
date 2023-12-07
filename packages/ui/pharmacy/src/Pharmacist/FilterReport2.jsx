import { useState } from "react";
import { useGlobalContext } from "../context";
import "../web.css";

const FilterReport2 = () => {
  const { medicines, closeFilterModal,setMedicineTable } = useGlobalContext();
  const [selected, setSelected] = useState("");

  const getnames = () => {
    let names = [];
    medicines.forEach((medicine) => {
      if (names.indexOf(medicine.name) === -1) {
        names.push(medicine.name);
      }
    });
    return names;
  };
  const [uniqueNames] = useState(getnames());

  const handleRadioButtonChange = (name) => {
    setSelected(name);
  };

  const filter = () => {
    if (selected === "") {
        setMedicineTable(null);
    } else {
      let med;
      med = medicines.find((medicine) => medicine.name === selected);
      setMedicineTable(med);
    }
    closeFilterModal();
  };

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          {uniqueNames.map((name, index) => {
            return (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={name}
                    checked={selected === name}
                    onChange={() => handleRadioButtonChange(name)}
                  />
                  {name}
                </label>
              </div>
            );
          })}
          <button className="btn btn-hipster filter-btn" onClick={filter}>
            {" "}
            Filter{" "}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterReport2;
