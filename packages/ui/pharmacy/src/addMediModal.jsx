import { useGlobalContext } from "./context"
import { useState } from "react"
import "./web.css"

const AddMediModal = () =>{

    const {closeAddMediModal, medicines,setMedicines} = useGlobalContext()
    const [medicineData, setMedicineData] = useState({
        Name:'',
        ingredient1: '',
        ingredient2: '',
        ingredient3: '',
        price: '',
        quantity: '',
        description:''
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      // Handle changes in input fields
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMedicineData({ ...medicineData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        if(medicineData.Name === '' || medicineData.description === '' || medicineData.price === '' || medicineData.quantity === ''){
            return;
        }
        let ing=[]
        ing.push(medicineData.ingredient1)
        ing.push(medicineData.ingredient2)
        ing.push(medicineData.ingredient3)
        setMedicines([...medicines,{
            ingredients:ing,
            Name:medicineData.Name,
            price:parseInt(medicineData.price),
            description: medicineData.description,
            quantity: parseInt(medicineData.quantity),
            sales: 0,
            picture:"https://rhc.nhsggc.org.uk/media/1331/medicines.png?width=262&height=187&mode=max"
            },])
        closeAddMediModal()
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
            value={medicineData.Name}
            onChange={handleInputChange}
          />
        </div>
        {isSubmitted && medicineData.Name === '' && (
            <p className='text-danger'>Please fill out this field</p>
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
        {isSubmitted && medicineData.price === '' && (
            <p className='text-danger'>Please fill out this field</p>
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
        {isSubmitted && medicineData.quantity === '' && (
            <p className='text-danger'>Please fill out this field</p>
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
        {isSubmitted && medicineData.description === '' && (
            <p className='text-danger'>Please fill out this field</p>
          )}
        <button type="submit" className="btn btn-hipster close-btn">Add Medicine</button>
      </form>
        </div>
        </div>
    </aside>
    )
}

export default AddMediModal