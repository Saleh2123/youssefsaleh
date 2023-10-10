import { useGlobalContext } from "./context"
import Requests from "./requests"
import ReqModal from "./reqModal"
import "./web.css"

const Requestshome = () => {
    const {showModal} = useGlobalContext()
    return (
        <main style={{"margin-top": "150px"}}>
        <Requests/>
        {showModal && <ReqModal />}
        </main>
    )
}
export default Requestshome
