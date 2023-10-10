import { useGlobalContext } from "./context"
import "./web.css"

const Pharmacistsview = () =>{
    const {pharmacists, removePharmacist} = useGlobalContext()

    // if(loading){
    //     return (
    //         <section className="section">
    //             <h4>Loading...</h4>
    //         </section>
    //     )
    // }
    if(pharmacists.length < 1){
        return (
            <section className="section">
                <h4>No pharmacists.</h4>
            </section>
        )
    }
    return (
        <section className="section-center">
            {pharmacists.map((pharmacist)=>{
                // console.log(image)
                return (
                <article key={pharmacist.id} id={pharmacist.id} className="single-meal" style={{"background-color":"darkred"}}>
                    <h2 style={{color:"white"}}>
                        Pharmacist Name: {pharmacist.name}
                    </h2>
                    <footer>
                        <p style={{color:"black"}}>
                           ID:{pharmacist.id}
                        </p>
                        <p style={{color:"black"}}>
                           Age:{pharmacist.age}
                        </p>
                        <p style={{color:"black"}}>
                           Education:{pharmacist.education}
                        </p>
                    </footer>
                    <button className="btn btn-sm ml-3 d-inline-block delete-button" style={{"background-color":"gray", color:"black"}} onClick={()=>removePharmacist(pharmacist.id)}>remove</button>
                </article>
                )
})}
        </section>
    )
}

export default Pharmacistsview
