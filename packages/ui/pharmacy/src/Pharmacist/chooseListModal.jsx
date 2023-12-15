import { useGlobalContext } from "../context"
import "../web.css"
import "../Patient/somecss.css"

const ChooseListModal = () =>{

    const {setShowChatModal,setShowChatModal1,setShowChatModal2} = useGlobalContext()

    const showChat1 = ()=>{
        setShowChatModal1(true);
        setShowChatModal(false);
    }

    const showChat2 = ()=>{
        setShowChatModal2(true);
        setShowChatModal(false);
    }

    return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <div className="modal-content">
        <section className="pharmacists-container curvedrec" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={showChat1}>
            <p style={{"color":"white"}}>
                Chat With Doctors
            </p>
        </section>
        <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>or</h5>
        <section className="pharmacists-container curvedrec" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={showChat2}>
            <p style={{"color":"white"}}>
                Chat With Patients
            </p>
        </section>
        <button className="btn btn-hipster close-btn" onClick={()=>setShowChatModal(false)}>close</button>
        </div>
        </div>
    </aside>
    )
}

export default ChooseListModal
