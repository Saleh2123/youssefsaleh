import { useState } from "react";
import { _TARGET } from "../_target";
import { useGlobalContext } from "../context";
import React, { useRef } from 'react';
import "../web.css";
import "./modals.css";

const EddMediModal = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    closeEddMediModal,
    medicines,
    setMedicines,
    editedMedicine,
    setEditedMedicine,
    editedindex,
  } = useGlobalContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setEditedMedicine({ ...editedMedicine, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (
      editedMedicine.name === "" ||
      editedMedicine.description === "" ||
      editedMedicine.price === "" ||
      editedMedicine.quantity === ""
    ) {
      return;
    }
    if (selectedImage) {
      editedMedicine.picture = URL.createObjectURL(selectedImage);
    }
    let arr = medicines;
    arr[editedindex] = editedMedicine;
    setMedicines(arr);
    closeEddMediModal();

    await fetch(`${_TARGET}/api/medicine/update`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: editedMedicine.name,
        description: editedMedicine.description,
        quantity: +editedMedicine.quantity,
        price: +editedMedicine.price,
      }),
    });
  };
  return (
    <aside className="modoverlay">
      <div className="modcontainer">
        <div className="modcontent">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="Name"
                value={editedMedicine.name}
                onChange={handleInputChange}
              />
            </div>
            {isSubmitted && editedMedicine.name === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <div>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={editedMedicine.price}
                onChange={handleInputChange}
              />
            </div>
            {isSubmitted && editedMedicine.price === "" && (
              <p className="text-danger">Please fill out this field</p>
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
            {isSubmitted && editedMedicine.quantity === "" && (
              <p className="text-danger">Please fill out this field</p>
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
            {isSubmitted && editedMedicine.description === "" && (
              <p className="text-danger">Please fill out this field</p>
            )}
            <div style={{"margin-top":"120px","display":"flex","justify-content": "center" , "align-items":"center"}}>
               <label>Upload Photo</label>
                  <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e)}
                />
              <button className="btn-hipster close-btn btn-accept" type="button" onClick={() => fileInputRef.current.click()}>Choose Image</button>
            </div>
            <div style={{"margin-top":"10px","display":"flex","justify-content": "center" , "align-items":"center"}}>
            <button type="submit" className="btn btn-hipster close-btn">
            Edit Medicine
            </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default EddMediModal;
