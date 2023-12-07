import ReportTablePhar from "./ReportTablePhar";
import ReportTitlePhar from "./ReportTitlePhar";
import { useGlobalContext } from "../context";
import FilterReport2 from "./FilterReport2";

const SalesPhar = () =>{
    const { showFilterModal } = useGlobalContext();

    return(
        <main>
            <ReportTitlePhar />
           <ReportTablePhar />
           {showFilterModal && <FilterReport2 />}
        </main>
    )
}
 export default SalesPhar;
