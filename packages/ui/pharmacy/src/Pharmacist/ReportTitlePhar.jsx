import { FaFilter } from "react-icons/fa";
import { useGlobalContext } from "../context";

const ReportTitlePhar = ()=>{
    const { setShowFilterModal } = useGlobalContext();

    return (
        <div style={{"display":"flex"}}>
            <h1 style={{"color":"orange"}} >
                Sales Report
            </h1>
        <FaFilter
        style={{ color: "white", cursor: "pointer", "margin-top":"20px", "margin-left":"400px" }}
        onClick={()=>setShowFilterModal(true)}
      />
      </div>
    )
}
export default ReportTitlePhar
