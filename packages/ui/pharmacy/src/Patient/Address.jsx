import React, { useEffect } from 'react';
import { useGlobalContext } from "../context";
import { useState } from 'react'
import { FaHome, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import "../web.css";

const Address = () =>{
    const [chosenAddress,setChosenAddress] = useState({
        street: 'Ahmed Mostageer Street',
        city: 'Cairo',
        district: 'Fifth Settlement',
        neighborhood: "Narges 3",
        postalCode: '12345',
        country: 'Egypt',
        telephoneNum: +201125922421,
        buildingNo : 265
     });
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
        }
    ]);
    const { } = useGlobalContext();

    return (
        <div>
            <div className='above'>
               <h4>Delivery Address</h4>
               <button className='bt'>Change</button>
            </div>
            <div className="cart">
               <div>
               <h2 style={{"color":"wheat"}}>Address details</h2>
               <div className="image-section">
                   <img
                     src="https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_640.png"
                     alt="No"
                     className="img"
                    />
                </div>
                </div>
                <div className="icon-container">
                    <FaHome className="address-icon" />
                    <p>{chosenAddress.neighborhood}{", "}{chosenAddress.street}{", "}{chosenAddress.buildingNo}</p>
                </div>
                <div className="icon-container">
                    <FaMapMarkerAlt className="address-icon" />
                    <p>{chosenAddress.district}{", "}{chosenAddress.city}{", "}{chosenAddress.country}</p>
                </div>
                <div className="icon-container">
                    <FaPhone className="address-icon" />
                    <p>{chosenAddress.telephoneNum}</p>
                </div>
            </div>
        </div>
    )
}

export default Address;
