import { useGlobalContext } from "../context"
import Search from "../All/Search"
import Medicines from "../All/Medicines"
import Modal from "../All/Modal"
import "../web.css"
import FilterModal from "../All/FilterModal"
import NavPatient from "./NavPatient"
import Logout from "../All/logoutModal"

const Patienthome = () => {
    const {showModal,showFilterModal,showlogoutModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "170px"}}>
        <NavPatient/>
        <Search/>
        <Medicines/>
        {showlogoutModal && <Logout />}
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </main>
    )
}
export default Patienthome
