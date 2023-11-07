import { useGlobalContext } from "../context"
import Search from "../All/Search"
import Medicines from "../All/Medicines"
import Modal from "../All/Modal"
import "../web.css"
import FilterModal from "../All/FilterModal"

const Patienthome = () => {
    const {showModal,showFilterModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "170px"}}>
        <Search/>
        <Medicines/>
        {showModal && <Modal />}
        {showFilterModal && <FilterModal/>}
        </main>
    )
}
export default Patienthome
