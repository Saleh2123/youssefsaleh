import { useGlobalContext } from "./context"
import Search from "./Search"
import Medicines from "./Medicines"
import Modal from "./Modal"
import NavAdmin from "./NavAdmin"
import "./web.css"
import FilterModal from "./FilterModal"

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