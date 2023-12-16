import { useGlobalContext } from "../context"
import Search from "../All/Search"
import Medicines from "./Medicines"
import Modal from "../All/Modal"
import NavAdmin from "./NavAdmin"
import "../web.css"
import "../Patient/viewcart.css"
import FilterModal from "../All/FilterModal"
import Logout from "../All/logoutModal"

const Adminhome = () => {
    const {showModal,showFilterModal, showlogoutModal} = useGlobalContext()
    return (
        <div className="page-container">
        <header>
        <NavAdmin/>
        </header>
        <Search/>
        <Medicines/>
        {showlogoutModal && <Logout />}
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </div>
    )
}
export default Adminhome
