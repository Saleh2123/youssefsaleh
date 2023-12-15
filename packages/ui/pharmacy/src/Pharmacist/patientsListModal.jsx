import { useGlobalContext } from "../context"
import "../web.css"
import "../Patient/somecss.css"

const PatientsListModal = () =>{

    const {patients, setShowChatModal} = useGlobalContext()

    const handleMessengerClick = (ID) => {
        // Replace 'USER_ID_OR_USERNAME' with the actual user ID or username
        const userIdentifier = ID;
        // Create the Messenger deep link
        const messengerLink = `https://www.messenger.com/t/${userIdentifier}`;
        // Open the link in a new tab
        window.open(messengerLink, '_self');
      };

    return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <div className="modal-content">
            {patients.map((patient)=>{
                return(
                    <section className="pharmacists-container curvedrec" onClick={()=>handleMessengerClick(patient.chatID)}>
                    <p>
                        <h3>{`Patient ${patient.name}`}</h3>
                        <h6>{`Struggling from ${patient.reason}`}</h6>
                    </p>
                    </section>
                )
            })}
        <button className="btn btn-hipster close-btn" onClick={()=>setShowChatModal(false)}>close</button>
        </div>
        </div>
    </aside>
    )
}

export default PatientsListModal
