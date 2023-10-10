import { useGlobalContext } from "./context"
import "./web.css"
import { FaEdit } from 'react-icons/fa';

const MedicinesP = () =>{
    const {medicines, selectMedicine,setShowAddMediModal,editMedicine} = useGlobalContext()

    // if(loading){
    //     return (
    //         <section className="section">
    //             <h4>Loading...</h4>
    //         </section>
    //     )
    // }
    if(medicines.length < 1){
        return (
            <section className="section">
                <h4>No medicines matched your search term. Please try again.</h4>
            </section>
        )
    }
    return (
        <section className="section-center">
            {medicines.map((medicine)=>{
                // console.log(image)
                return (
                <article key={medicine.Name} id={medicine.Name} className="single-meal" style={{"background-color":"darkred"}}>
                    <img src={medicine.picture} alt ={"No"} className="img" onClick={()=>{selectMedicine(medicine.Name)}}/>
                    <footer>
                        <h5 style={{color:"white"}}>
                            {medicine.Name}
                        </h5>
                        <FaEdit style={{"margin-left": "10px","color":"white","cursor":"pointer"}} onClick={()=>{editMedicine(medicine.Name)}}/>
                    </footer>
                </article>
                )              
})}
            <article className="single-meal" style={{"background-color":"darkred"}}>
                    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///8aGhoAAADk5OTh4eEbGxuFhYWIiIj8/PwYGBgLCwvo6OgWFhbGxsakpKSCgoJqampvb2+Tk5PS0tLExMSgoKBlZWWSkpKampoQEBDT09PMzMxC6WveAAACmklEQVR4nO3d0W6jMBBAUXuoE0NIQtJuNl3+/z/XoLZvW2yUqYfsPa+NkG8MUSVG4BwAAAAAAAAAAAAAAAAAPEKMtVegLRXGt+vuW+frccPfQ3S/OlmQPtCfai90nZgM0vtFoZfBbXQfzxKWA30IQc61l7pGdKNk9M2FXl5rL3eVW5dVOOlutRe7Rsy4Bj+30fstXohN3kk6ab0cai93hZf8Qu+lqb3cFSik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+zZZWDROWVIYiqZNFGdvpkPH5iXPsWQPuzHzsI3uaFF0461fmqf8mqvMGdv72MK0ibn6QW8GLk7Thl3uLFdbsIMl+m6aZFTZyXQRDqK17hKtDDqnanQnCflnnpZ0RntRmiqOJnZw0nc6m3jMGvn9CUGOKlfi75Kff03pNL2rFO6sFKZ/gfYKfRT+KAoppLA+CimksD4KKaSwPgoppLA+CimksD4KKaSwPgop/Ie9lcIQUuFT33uaCzVcrRR6rfuHb+IN3Mef6dwDjq5rjRS274/Pm5mYxZhozWI4N8g87PF4JUcNXi5agdPPaRdyR05Kvok298PtNBO105tti+7P4LMn0AoKQ/a0nPjLq+p0Yjr4oclyGPMf1zbNJuYeVrOtUMHTzDxPM7OJQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4KKbSPQgrto5BC+yik0D4K/6vC8PyF/SYLn3/aJPrsFyCGPmzw/YfRDfnPM9OcxVM0Sp+ZGDb6HlJ3Fr80VTz/Ociu9lJXipfF9wFPL5Jt5bLBq/DDafGdzsn7SXmcUk9adjze99+7j5+fhU1xaXPi879iHgAAAAAAAAAAAAAAADDkL1oyOtIuPG8iAAAAAElFTkSuQmCC"} 
                    alt ={"No"} className="img" onClick={()=>setShowAddMediModal(true)}/>
                    <footer>
                        <h5 style={{color:"white"}}>
                            Add medicine
                        </h5>
                    </footer>
            </article>
        </section>
    )
}

export default MedicinesP
