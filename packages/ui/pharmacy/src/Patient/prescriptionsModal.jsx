import { useGlobalContext } from "../context"
import "../web.css"
import "./somecss.css"
import {useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';

const PrescriptionsModal = () =>{
    const {prescriptions, setShowPrescriptionsModal,addtocart, chosenMedicine} = useGlobalContext();
    const [selectedPrescription, setSelectedPrescription] = useState(null);
    const [flag0, setFlag0] = useState(false);
    const [flag, setFlag] = useState(false);

    const checkPrescription = ()=>{
        if(selectedPrescription !== null && selectedPrescription.medicineName === chosenMedicine.name){
            addtocart(chosenMedicine);
            setShowPrescriptionsModal(false);
        }
        if(selectedPrescription !== null && selectedPrescription.medicineName !== chosenMedicine.name){
            setFlag(true);
        }
        if(selectedPrescription === null){
            setFlag0(true);
        }
    }

    const selectPrescription = (prescription)=>{
        setSelectedPrescription(prescription);
        setFlag(false);
        setFlag0(false);
    }

    return (
        <aside className="modal-overlay">
        <div className="modal-container">
        <div className="modal-content">
            {prescriptions.map((prescription)=>{
                return(
                    <section
                    className =
                    {prescription == selectedPrescription ?
                    "pharmacistscont curvedrec" :
                    "pharmacistscontainer curvedrec"
                    }
                    style={{"display":"flex"}}
                    onClick={()=>selectPrescription(prescription)}>
                    <p>
                        <h3 style={{color:"black"}}>{`Medicine ${prescription.medicineName}`}</h3>
                        <h4 style={{color:"black"}}>{`Dose: ${prescription.dose} miligrams`}</h4>
                        <h6>{`By DR. ${prescription.doctorName}`}</h6>
                        <h6>{`date: ${prescription.date}`}</h6>
                    </p>
                    <div>
                    <img
                    src={"https://everyone.org/media/wysiwyg/rx-guide.png"}
                    alt ="No"/>
                    </div>
                    </section>
                )
            })}
            {flag0 &&
                (
                <p className="text-danger">A Prescription has to be chosen*</p>
                )
            }
            {flag &&
                (
                <p className="text-danger">Prescription chosen is unrelated to the medicine*</p>
                )
            }
            <div className="button-container">
                <button className="btn-addtocart" onClick={checkPrescription}>
                    Add Medicine to my Cart <FaShoppingCart style={{"margin-left":"5px","font-size":"25px"}}/>
                </button>
                <button className="btn-closa" onClick={()=>setShowPrescriptionsModal(false)}>Close</button>
            </div>
        </div>
        </div>
    </aside>
    )
}

export default PrescriptionsModal
