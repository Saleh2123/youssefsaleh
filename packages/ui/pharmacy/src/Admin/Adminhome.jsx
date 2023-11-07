import { useGlobalContext } from "../context"
import Search from "../All/Search"
import Medicines from "../All/Medicines"
import Modal from "../All/Modal"
import NavAdmin from "./NavAdmin"
import "../web.css"
import FilterModal from "../All/FilterModal"

const Adminhome = () => {
    const {showModal,showFilterModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "200px"}}>
        <NavAdmin/>
        <Search/>
        <Medicines/>
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </main>
    )
}
export default Adminhome
