import { useGlobalContext } from "./context"
import "./web.css"
import { useState } from "react"
import { FaFilter } from 'react-icons/fa';

const Search = () =>{
    const {setShowFilterModal} = useGlobalContext()
    const [text,setText] = useState('')

    // const {setSearchTerm} = useGlobalContext()

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // if(text){
        //     setSearchTerm(text)
        // }
    }

    return (
    <header className="search-container" style={{"background-color":"darkred"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type medicine name..." value={text} onChange={handleChange} className="form-input" />
            <button type="submit" className="btn">search</button>
        </form>
        <FaFilter style={{color: "white", cursor:"pointer" }} onClick={()=>setShowFilterModal(true)} />
    </header>
    )
}

export default Search