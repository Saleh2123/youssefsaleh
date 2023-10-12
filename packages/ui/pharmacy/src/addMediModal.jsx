import { useState } from "react";
import { _TARGET } from "./_target";
import { useGlobalContext } from "./context";
import "./web.css";

const AddMediModal = () => {
  const { closeAddMediModal, medicines, setMedicines } = useGlobalContext();
  const [medicineData, setMedicineData] = useState({
    name: "",
    description: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    price: "",
    quantity: "",
    use: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicineData({ ...medicineData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      medicineData.name === "" ||
      medicineData.description === "" ||
      medicineData.price === "" ||
      medicineData.quantity === "" ||
      medicineData.use === ""
    ) {
      return;
    }
    let ing = [];
    ing.push(medicineData.ingredient1);
    ing.push(medicineData.ingredient2);
    ing.push(medicineData.ingredient3);
    setMedicines([
      ...medicines,
      {
        ingredients: ing,
        name: medicineData.name,
        price: parseInt(medicineData.price),
        description: medicineData.description,
        quantity: parseInt(medicineData.quantity),
        use: medicineData.use,
        sales: 0,
        picture: "https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max",
      },
    ]);
    closeAddMediModal();

    await fetch(`${_TARGET}/api/medicine/add`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: medicineData.name,
        use: medicineData.use,
        description: medicineData.description,
        ingredients: ing,
        quantity: +medicineData.quantity,
        picture: "https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max",
        price: +medicineData.price,
      }),
    });
  };
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={medicineData.name}
                onChange={handleInputChange}
              />
            </div>
            {isSubmitted && medicineData.name === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <div>
              <label>Ingredient 1:</label>
              <input
                type="text"
                name="ingredient1"
                value={medicineData.ingredient1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Ingredient 2:</label>
              <input
                type="text"
                name="ingredient2"
                value={medicineData.ingredient2}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Ingredient 3:</label>
              <input
                type="text"
                name="ingredient3"
                value={medicineData.ingredient3}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={medicineData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Use:</label>
              <input type="text" name="use" value={medicineData.use} onChange={handleInputChange} />
            </div>
            {isSubmitted && medicineData.price === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <div>
              <label>Quantity:</label>
              <input
                type="text"
                name="quantity"
                value={medicineData.quantity}
                onChange={handleInputChange}
              />
            </div>
            {isSubmitted && medicineData.quantity === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <div>
              <label>description:</label>
              <input
                type="text"
                name="description"
                value={medicineData.description}
                onChange={handleInputChange}
              />
            </div>
            {isSubmitted && medicineData.description === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <button type="submit" className="btn btn-hipster close-btn">
              Add Medicine
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default AddMediModal;
