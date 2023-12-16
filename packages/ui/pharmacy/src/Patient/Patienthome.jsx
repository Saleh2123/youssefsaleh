import { useGlobalContext } from "../context"
import Search from "../All/Search"
import MedicinesPa from "./MedicinesPa"
import Modal from "../All/Modal"
import "../web.css"
import "./viewcart.css"
import FilterModal from "../All/FilterModal"
import NavPatient from "./NavPatient"
import Logout from "../All/logoutModal"
import Cartbox from "./cartbox"
import PharmacistsListModal from "./pharmacistsListModal"
import PrescriptionsModal from "./prescriptionsModal"

const Patienthome = () => {
    const {showModal,showFilterModal,showlogoutModal,showChatModal, cart, showPrescriptionsModal} = useGlobalContext()
    return (
        <div className="page-container">
        <header>
        <NavPatient/>
        </header>
        <Search/>
        <MedicinesPa />
        {cart.length > 0 && < Cartbox/>}
        {showlogoutModal && <Logout />}
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        {showChatModal && <PharmacistsListModal/>}
        {showPrescriptionsModal && <PrescriptionsModal/>}
        </div>
    )
}
export default Patienthome
