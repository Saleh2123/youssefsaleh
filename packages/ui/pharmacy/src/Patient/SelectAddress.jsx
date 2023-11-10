import { useGlobalContext } from "../context";
import { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import "../web.css";
import "./viewcart.css"
import "./cart.css"

const SelectAddress = () => {
  const { chosenAddress,setChosenAddress} = useGlobalContext();
  const [addresses,setAddresses] = useState([
    {
       street: 'Ahmed Mostageer Street',
       city: 'Cairo',
       district: 'Fifth Settlement',
       neighborhood: "Narges 3",
       postalCode: '12345',
       country: 'Egypt',
       telephoneNum: +201125922421,
       buildingNo : 265
    },
    {
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'first Settlement',
        neighborhood: "Narges 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201725922421,
        buildingNo : 265
     },
     {
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'third Settlement',
        neighborhood: "Narges 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201124922401,
        buildingNo : 265
     },
     {
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'Nasr city',
        neighborhood: "Narges 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201125924421,
        buildingNo : 265
     },
     {
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'Fifth Settlement',
        neighborhood: "sheraton",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201125927421,
        buildingNo : 265
     },
     {
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'roxy',
        neighborhood: "Narges 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201125962421,
        buildingNo : 265
     },
    {
        street: 'Mohahmed Street',
        city: 'Cairo',
        district: 'Masr El gdeeda',
        neighborhood: "Banafseg 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201525922321,
        buildingNo : 19
     }
    ]);

  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }
  if (addresses.length < 1) {
    return (
      <section className="section">
        <h4>No Addresses Added before.</h4>
      </section>
    );
  }

  return (
    <div className="page-container">
        <header >
            <h1 style={{"color":"wheat"}}>Select Delivery Address</h1>
        </header>
    <section className="section-center">
      {addresses.map((address) => {
        return (
          <article
            key={address.telephoneNum}
            id={address.telephoneNum}
            className={address.telephoneNum === chosenAddress.telephoneNum?"singlemeal art":"singlemeal article"}
            style={{ "background-color": "orangered" ,"cursor":"pointer"}}
            onClick={()=>{setChosenAddress(address)}}
            >
            <div className="image-section">
               <img
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYo1EhO8V3yHFM_xmM2VUHTfkOUcT87AciNg&usqp=CAU"
                 alt="No"
                 className="img"
                />
            </div>
            <footer>
            <div className="icon-container">
                    <FaHome className="address-icon" />
                    <p>{address.neighborhood}{", "}{address.street}{", "}{address.buildingNo}</p>
                </div>
                <div className="icon-container">
                    <FaMapMarkerAlt className="address-icon" />
                    <p>{address.district}{", "}{address.city}{", "}{address.country}</p>
                </div>
                <div className="icon-container">
                    <FaPhone className="address-icon" />
                    <p>{address.telephoneNum}</p>
                </div>
                </footer>
          </article>
        );
      })}
    </section>
    </div>
  );
};

export default SelectAddress;

