import { useGlobalContext } from "../context"
import "../web.css"
import "../Patient/somecss.css"

const DoctorsListModal = () =>{

    const {doctors, setShowChatModal,setShowChatModal1} = useGlobalContext()

    const handleMessengerClick = (ID) => {
        // Replace 'USER_ID_OR_USERNAME' with the actual user ID or username
        const userIdentifier = ID;
        // Create the Messenger deep link
        const messengerLink = `https://www.messenger.com/t/${userIdentifier}`;
        // Open the link in a new tab
        window.open(messengerLink, '_self');
      };

      const BacktoPrevious = ()=>{
        setShowChatModal(true);
        setShowChatModal1(false);
      }

    return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <div className="modal-content">
            {doctors.map((doctor)=>{
                return(
                    <section className="pharmacists-container curvedrec" onClick={()=>handleMessengerClick(doctor.chatID)}>
                    <p>
                        <h3>{`Doctor ${doctor.name}`}</h3>
                        <h6>{`Studied at ${doctor.education}`}</h6>
                    </p>
                    </section>
                )
            })}
        <button className="btn btn-hipster close-btn" onClick={BacktoPrevious}>Back</button>
        </div>
        </div>
    </aside>
    )
}

export default DoctorsListModal
