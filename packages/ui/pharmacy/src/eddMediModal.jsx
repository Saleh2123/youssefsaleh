import { useGlobalContext } from "./context"
import { useState } from "react"
import "./web.css"

const EddMediModal = () =>{

    const {closeEddMediModal, medicines,setMedicines,editedMedicine,setEditedMedicine,editedindex} = useGlobalContext()
    const [isSubmitted, setIsSubmitted] = useState(false);

      // Handle changes in input fields
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "ingredient1"){
            const updatedIngredients = [...editedMedicine.ingredients];
            updatedIngredients[0] = value;
            setEditedMedicine({ ...editedMedicine, ingredients: updatedIngredients });
        }
        else if(name === "ingredient2"){
            const updatedIngredients = [...editedMedicine.ingredients];
            updatedIngredients[1] = value;
            setEditedMedicine({ ...editedMedicine, ingredients: updatedIngredients });
        }
        else if(name === "ingredient3"){
            const updatedIngredients = [...editedMedicine.ingredients];
            updatedIngredients[2] = value;
            setEditedMedicine({ ...editedMedicine, ingredients: updatedIngredients });
        }
        else{
        console.log(name)
        console.log(value)
        setEditedMedicine({ ...editedMedicine, [name]: value });
        }
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        if(editedMedicine.Name === '' || editedMedicine.description === '' || editedMedicine.price === '' || editedMedicine.quantity === ''){
            return;
        }
        let arr = medicines
        arr[editedindex] = editedMedicine
        setMedicines(arr)
        closeEddMediModal()
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
            name="Name"
            value={editedMedicine.Name}
            onChange={handleInputChange}
          />
        </div>
        {isSubmitted && editedMedicine.Name === '' && (
            <p className='text-danger'>Please fill out this field</p>
          )}
        <div>
          <label>Ingredient 1:</label>
          <input
            type="text"
            name="ingredient1"
            value={editedMedicine.ingredients[0]}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ingredient 2:</label>
          <input
            type="text"
            name="ingredient2"
            value={editedMedicine.ingredients[1]}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ingredient 3:</label>
          <input
            type="text"
            name="ingredient3"
            value={editedMedicine.ingredients[2]}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={editedMedicine.price}
            onChange={handleInputChange}
          />
        </div>
        {isSubmitted && editedMedicine.price === '' && (
            <p className='text-danger'>Please fill out this field</p>
          )}
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={editedMedicine.quantity}
            onChange={handleInputChange}
          />
        </div>
        {isSubmitted && editedMedicine.quantity === '' && (
            <p className='text-danger'>Please fill out this field</p>
          )}
        <div>
          <label>description:</label>
          <input
            type="text"
            name="description"
            value={editedMedicine.description}
            onChange={handleInputChange}
          />
        </div>
        {isSubmitted && editedMedicine.description === '' && (
            <p className='text-danger'>Please fill out this field</p>
          )}
        <button type="submit" className="btn btn-hipster close-btn">Edit Medicine</button>
      </form>
        </div>
        </div>
    </aside>
    )
}

export default EddMediModal