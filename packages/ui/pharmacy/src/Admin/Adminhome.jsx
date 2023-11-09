import { useGlobalContext } from "../context"
import Search from "../All/Search"
import Medicines from "./Medicines"
import Modal from "../All/Modal"
import NavAdmin from "./NavAdmin"
import "../web.css"
import FilterModal from "../All/FilterModal"
import Logout from "../All/logoutModal"

const Adminhome = () => {
    const {showModal,showFilterModal, showlogoutModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "200px"}}>
        <NavAdmin/>
        <Search/>
        <Medicines/>
        {showlogoutModal && <Logout />}
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </main>
    )
}
export default Adminhome
