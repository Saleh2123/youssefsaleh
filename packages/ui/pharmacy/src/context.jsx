import React, { useContext, useEffect, useState } from "react";
import { _TARGET } from "./_target";
// import axios from 'axios'

const AppContext = React.createContext();

// const allMedicinesUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [showlogoutModal, setShowlogoutModal] = useState(false);
  const [showAddMediModal, setShowAddMediModal] = useState(false);
  const [showEddMediModal, setShowEddMediModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [editedMedicine, setEditedMedicine] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editedindex, setEditedindex] = useState(0);
  const [cart, setCart] = useState([]);
  let [total,setTotal] = useState(0);
  const [selected, setSelected] = useState("");
  let [wallet,setWallet] = useState(337.15);
  const [cardNumber,setCardNumber] = useState('');
  const [byWallet, setByWallet] = useState(false);
  const [byCard, setByCard] = useState(false);
  const [noMethod, setNoMethod] = useState(false);
  const [archivedMeds, setArchivedMeds] = useState([]);
  let [notificationsCount,setNotificationsCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
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

    const addToArchivedMeds = (medicine) =>{ //viewing in patient remains
      medicine.archived = true;
      setArchivedMeds([...archivedMeds,medicine])
    }

    const removeFromArchivedMeds = (medicine) =>{
      medicine.archived = false;
      setArchivedMeds(archivedMeds.filter((med)=>med.name !== medicine.name))
    }

  const addtocart = (medicine)=>{
    const found = cart.find((med)=>med.name === medicine.name)
    if(found){
      if(CountMedicineInCart(medicine) < medicine.quantity){
        setCart([...cart, medicine]);
      }
      else{
        alert("No Enough Quantity");
      }
    }
    else{
      setCart([...cart, medicine]);
    }
  }

  const CountMedicineInCart = (medicine)=>{
    let count = 0;
    for(let i = 0 ; i < cart.length;i++){
      if(cart[i].name === medicine.name){
        count ++;
      }
    }
    return count;
  }

  const calculateTotal = ()=>{
    let sum=0;
    for(let i=0;i<cart.length;i++){
      sum+=cart[i].price
    }
    setTotal(sum);
  }

  const removeAllfromcart = (medicine)=>{
    const newcart = cart.filter((med)=> med.name !== medicine.name);
    setCart(newcart);
  }

  const removefromcart = (medicine)=>{
    const newcart = [];
    let flag = true;
    for(let i=0;i<cart.length;i++){
      if(cart[i].name !== medicine.name){
        newcart.push(cart[i]);
      }
      else if(cart[i].name === medicine.name && flag){
        flag = false;
      }
      else{
        newcart.push(cart[i]);
      }
    }
    setCart(newcart);
  }

  useEffect(()=>{
    calculateTotal();
  },[cart])

  const groupMedicines= ()=> {
    const meds = [];
    for(let i=0;i<cart.length;i++){
      if(meds.indexOf(cart[i]) === -1){
          meds.push(cart[i])
      }
    };
    console.log(meds);
    return meds;
  }

  const [uniqueMedicines,setUniqueMedicines] = useState(groupMedicines());

  useEffect(()=>{
     setUniqueMedicines(groupMedicines());
  },[cart])

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
  const meds = () => {
    const meds = [
      {
        name: "MedicineA",
        description: "description",
        price: 10,
        quantity: 900,
        sales: 1580,
        use:"antibiotic",
        picture:"data:image/jpeg;base64,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",
        archived: false,
        notified: false
      },
      {
        name: "MedicineB",
        description: "description",
        price: 50,
        quantity: 900,
        sales: 1580,
        use:"antibiotic",
        picture:"data:image/jpeg;base64,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",
        archived: false,
        notified: false
      },
      {
        name: "MedicineC",
        description: "description",
        price: 100,
        quantity: 3,
        sales: 1580,
        use:"antibiotic",
        picture:"data:image/jpeg;base64,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",
        archived: false,
        notified: false
      },
      {
        name: "MedicineD",
        description: "description",
        price: 130,
        quantity: 900,
        sales: 1580,
        use:"antibiotic",
        picture:"data:image/jpeg;base64,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",
        archived: false,
        notified: false
      }
    ];
    return meds;
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
  const [medicines, setMedicines] = useState(meds()); //dummy data

  // useEffect(()=>{
  //   const NewMedicines = medicines.filter((med)=> med.quantity > 0)
  //   setMedicines(NewMedicines);
  // },[medicines])
  //7

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

  useEffect( ()=>{
    const nots = [];
    const count = 0;
    for(let i=0;i<medicines.length;i++){
      if(medicines[i].quantity == 0 && medicines[i].notified == false){
        count++;
        nots.push({ id: medicines[i].name, message: `${medicines[i].name} is out of Stock`, time: '10 minutes ago' });
        medicines[i].notified = true;
      }
    }
    setNotificationsCount(count)
    setNotifications(...notifications,nots);
  }
    ,[medicines])

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

  const selectMedicine = (Name, Archive) => {
    let medicine;
    if(Archive){
        medicine = archivedMeds.find((medicine) => medicine.name === Name);
    }
    else{
        medicine = medicines.find((medicine) => medicine.name === Name);
    }
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

  const closelogoutModal = () => {
    setShowlogoutModal(false);
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
        getPharmacists,
        closelogoutModal,
        showlogoutModal,
        setShowlogoutModal,
        cart,
        setCart,
        addtocart,
        removeAllfromcart,
        removefromcart,
        total,
        CountMedicineInCart,
        chosenAddress,
        setChosenAddress,
        addresses,
        setAddresses,
        uniqueMedicines,
        wallet,
        setWallet,
        selected,
        setSelected,
        cardNumber,
        setCardNumber,
        byWallet,
        byCard,
        setByWallet,
        setByCard,
        noMethod,
        setNoMethod,
        addToArchivedMeds,
        removeFromArchivedMeds,
        archivedMeds,
        notificationsCount,
        setNotificationsCount,
        notifications,
        setNotifications
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
