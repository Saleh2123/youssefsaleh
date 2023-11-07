import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { _TARGET } from "../_target";
import { useGlobalContext } from "../context";
import "../web.css";

const Search = () => {
  const { setShowFilterModal, selectMedicine } = useGlobalContext();
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  // const {setSearchTerm} = useGlobalContext()

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      setResults([]);
      return;
    }

    const res = await fetch(`${_TARGET}/api/medicine/find?name=${text}`, {
      headers: { "content-type": "application/json" },
    });
    const results = await res.json();
    console.log(results);
    setResults(results);
  };

  return (
    <>
      <header className="search-container" style={{ "background-color": "darkred" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type medicine name..."
            value={text}
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="btn">
            search
          </button>
        </form>
        <FaFilter
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setShowFilterModal(true)}
        />
      </header>
      {results.map((result) => {
        // console.log(image)
        return (
          <article
            key={result.name}
            id={result.name}
            className="single-meal"
            style={{ "background-color": "darkred" }}
          >
            <img
              src={result.picture}
              alt={"No"}
              className="img"
              onClick={() => {
                selectMedicine(result.name);
              }}
            />
            <footer>
              <h5 style={{ color: "white" }}>{result.name}</h5>
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default Search;
