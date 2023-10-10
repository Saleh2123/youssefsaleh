import { useGlobalContext } from "./context"
import "./web.css"

const Medicines = () =>{
    const {medicines, selectMedicine} = useGlobalContext()

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
                    </footer>
                </article>
                )
})}
        </section>
    )
}

export default Medicines
