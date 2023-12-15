import { useGlobalContext } from "../context"
import "../web.css"
import "./somecss.css"

const PharmacistsListModal = () =>{

    const {pharmacists, setShowChatModal} = useGlobalContext()

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
            {pharmacists.map((pharmacist)=>{
                return(
                    <section className="pharmacists-container curvedrec" onClick={()=>handleMessengerClick(pharmacist.chatID)}>
                    <p>
                        <h3>{`DR. Pharmacist ${pharmacist.name}`}</h3>
                        <h6>{`studied at ${pharmacist.education}`}</h6>
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

export default PharmacistsListModal
