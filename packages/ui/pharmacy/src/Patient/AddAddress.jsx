import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from '../context';
import './cart.css';

const AddAddress = () => {
    const {setAddresses, addresses} =  useGlobalContext();
    const navigate = useNavigate()
    const changePage = (exten) =>{
        navigate(exten)
    }
    const [isSubmitted,setisSubmitted] = useState(false);
    const [address, setAddress] = useState({
    street: '',
    city: 'Cairo', // Default value for city
    district: '',
    neighborhood: '',
    postalCode: '',
    country: 'Egypt', // Default value for country
    telephoneNum: '',
    buildingNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitted(true);
    if(address.buildingNo !=='' && address.postalCode !=='' && address.street !==''
    && address.district !=='' && address.neighborhood !=='' && address.telephoneNum !==''){
        setAddresses([...addresses,address])
        changePage("/seladdress");
    }
  };

  return (
    <main>
        <h2 style={{"color":"white"}}>Add A new Address</h2>
    <form className="registration-form-container" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" name="street" value={address.street} onChange={handleChange} />
        {isSubmitted && address.street==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select id="city" name="city" value={address.city} onChange={handleChange}>
          <option value="Cairo">Cairo</option>
          {/* Add other city options as needed */}
        </select>
        {}
      </div>

      <div className="form-group">
        <label htmlFor="district">District:</label>
        <input type="text" id="district" name="district" value={address.district} onChange={handleChange} />
        {isSubmitted && address.district==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="neighborhood">Neighborhood:</label>
        <input type="text" id="neighborhood" name="neighborhood" value={address.neighborhood} onChange={handleChange} />
        {isSubmitted && address.neighborhood==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" value={address.postalCode} onChange={handleChange} />
        {isSubmitted && address.postalCode==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={address.country} onChange={handleChange}>
          <option value="Egypt">Egypt</option>
          {/* Add other country options as needed */}
        </select>
        {}
      </div>

      <div className="form-group">
        <label htmlFor="telephoneNum">Telephone Number:</label>
        <input type="tel" id="telephoneNum" name="telephoneNum" value={address.telephoneNum} onChange={handleChange} />
        {isSubmitted && address.telephoneNum==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="buildingNo">Building Number:</label>
        <input type="text" id="buildingNo" name="buildingNo" value={address.buildingNo} onChange={handleChange} />
        {isSubmitted && address.buildingNo==='' &&
        (
            <p className="text-danger">Please fill out this field</p>
        )}
      </div>

      <button type="submit">Submit</button>

    </form>
    </main>
  );
};

export default AddAddress;
