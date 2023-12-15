import { useGlobalContext } from "../context"
import Search from "../All/Search"
import MedicinesPa from "./MedicinesPa"
import Modal from "../All/Modal"
import "../web.css"
import FilterModal from "../All/FilterModal"
import NavPatient from "./NavPatient"
import Logout from "../All/logoutModal"
import Cartbox from "./cartbox"
import PharmacistsListModal from "./pharmacistsListModal"

const Patienthome = () => {
    const {showModal,showFilterModal,showlogoutModal,showChatModal, cart} = useGlobalContext()
    return (
        <main style={{"margin-top": "170px"}}>
        <NavPatient/>
        <Search/>
        <MedicinesPa />
        {cart.length > 0 && < Cartbox/>}
        {showlogoutModal && <Logout />}
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        {showChatModal && <PharmacistsListModal/>}
        </main>
    )
}
export default Patienthome
