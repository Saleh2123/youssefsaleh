import { useGlobalContext } from "../context"
import { FaArchive } from 'react-icons/fa';

const ArchivedMeds = () => {
    const{archivedMeds , removeFromArchivedMeds, selectMedicine} = useGlobalContext()
    return (
    <section className="favorites">
        <div className="favorites-content">
            {/* <h5>Archived Medicines</h5> */}
            <FaArchive style={{"margin-left":"15px"}} size={40} color="darkkhaki" />
            <div className="favorites-container">
                {archivedMeds.map((archivedMed)=>{
                    return(
                    <div key={archivedMed.name} className="favorite-item">
                        <h6>{archivedMed.name}</h6>
                        <img src={archivedMed.picture} alt="no image" className="favorites-img img" onClick={()=> selectMedicine(archivedMed.name,true)}/>
                        <button className="remove-btn" onClick={()=> removeFromArchivedMeds(archivedMed)}> Unarchive </button>
                    </div>
                    )
                }
                )}
            </div>
        </div>
    </section>
    )
}

export default ArchivedMeds
