import React, { useContext, useEffect, useState } from "react";
import { _TARGET } from "./_target";
// import axios from 'axios'

const AppContext = React.createContext();

// const allMedicinesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [showAddMediModal, setShowAddMediModal] = useState(false);
  const [showEddMediModal, setShowEddMediModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editedMedicine, setEditedMedicine] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editedindex, setEditedindex] = useState(0);

  const getPharmacists = () => {
    const phars = [
      {
        name: "Ahmed",
        id: 1,
        age: 20,
        education: "harvard",
      },
      {
        name: "Mohamed",
        id: 2,
        age: 20,
        education: "harvard",
      },
      {
        name: "Ali",
        id: 3,
        age: 20,
        education: "harvard",
      },
      {
        name: "zeyad",
        id: 4,
        age: 20,
        education: "harvard",
      },
    ];
    return phars;
  };
  const getRequests = () => {
    const phars = [
      {
        username: "khelo",
        name: "khaled",
        email: "khaled@gmail.com",
        password: "abc",
        dateofbirth: "5 jan 2002",
        hourlyRate: 4,
        affiliation: "Magdy hospital",
        educationalBackground: "abc",
      },
      {
        username: "zozz",
        name: "zozz",
        email: "ziad@gmail.com",
        password: "abc",
        dateofbirth: "5 jan 2002",
        hourlyRate: 4,
        affiliation: "Magdy hospital",
        educationalBackground: "abc",
      },
      {
        username: "mo",
        name: "mo",
        email: "omar@gmail.com",
        password: "abc",
        dateofbirth: "5 jan 2002",
        hourlyRate: 4,
        affiliation: "Magdy hospital",
        educationalBackground: "abc",
      },
      {
        username: "zozo",
        name: "zozo",
        email: "zeyad@gmail.com",
        password: "abc",
        dateofbirth: "5 jan 2002",
        hourlyRate: 4,
        affiliation: "Magdy hospital",
        educationalBackground: "abc",
      },
    ];
    return phars;
  };
  const getPatients = () => {
    const patients = [
      {
        name: "kiro",
        id: 1,
        age: 20,
        reason: "headache",
      },
      {
        name: "hassabo",
        id: 2,
        age: 20,
        reason: "headache",
      },
      {
        name: "Ali",
        id: 3,
        age: 20,
        reason: "headache",
      },
      {
        name: "zeyad",
        id: 4,
        age: 20,
        reason: "headache",
      },
    ];
    return patients;
  };

  const [Allmedicines, setAllMedicines] = useState([]);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(`${_TARGET}/api/medicine/find`, {
        headers: { "content-type": "application/json" },
      });
      const results = await res.json();
      console.log(results);
      setMedicines(results);
      setAllMedicines(results);
    };
    get();
  }, [setAllMedicines, setMedicines]);

  const [pharmacists, setPharmacists] = useState(getPharmacists());
  const [patients, setPatients] = useState(getPatients());
  const [requests] = useState(getRequests());
  // const [searchTerm,setSearchTerm] = useState("a")
  // const [showModal,setShowModal] = useState(false)
  // const [selectedMedicine,setSelectedMedicine] = useState(null)

  // const fetchMedicines = async (url) => {
  //     setLoading(true)
  //     try{
  //     const {data} = await axios(url)
  //     if(data.medicines){
  //         setMedicines(data.medicines)
  //     }
  //     else{
  //         setMedicines([])
  //     }
  //     }
  //     catch(error){
  //         console.log(error.response)
  //     }
  //     setLoading(false)
  // }

  const selectMedicine = (Name) => {
    let medicine;
    medicine = medicines.find((medicine) => medicine.name === Name);

    setSelectedMedicine(medicine);
    setShowModal(true);
  };

  const editMedicine = (Name) => {
    let medicine;
    medicine = medicines.find((medicine) => medicine.name === Name);
    setEditedMedicine(medicine);

    const index = medicines.findIndex((medicine) => medicine.name === Name);
    setEditedindex(index);

    setShowEddMediModal(true);
  };

  const selectRequest = (email) => {
    let request;
    request = requests.find((request) => request.email === email);

    setSelectedRequest(request);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAddMediModal = () => {
    setShowAddMediModal(false);
  };

  const closeEddMediModal = () => {
    setShowEddMediModal(false);
  };

  const closeFilterModal = () => {
    setShowFilterModal(false);
  };

  const removePharmacist = (id) => {
    let arr = pharmacists.filter((pharmacist) => pharmacist.id !== id);
    setPharmacists(arr);
  };

  const removePatient = (id) => {
    let arr = patients.filter((patient) => patient.id !== id);
    setPatients(arr);
  };

  // useEffect(()=> {
  //     if(searchTerm){
  //         fetchMedicines(`${allMealsUrl}${searchTerm}`);
  //     }
  // }
  // ,[searchTerm])
  // :>>>

  return (
    <AppContext.Provider
      value={{
        medicines,
        setMedicines,
        selectedMedicine,
        selectMedicine,
        closeModal,
        showModal,
        patients,
        pharmacists,
        removePharmacist,
        removePatient,
        requests,
        selectRequest,
        selectedRequest,
        showAddMediModal,
        setShowAddMediModal,
        closeAddMediModal,
        showEddMediModal,
        setShowEddMediModal,
        closeEddMediModal,
        editMedicine,
        editedMedicine,
        setEditedMedicine,
        editedindex,
        closeFilterModal,
        showFilterModal,
        setShowFilterModal,
        Allmedicines,
        setAllMedicines,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
