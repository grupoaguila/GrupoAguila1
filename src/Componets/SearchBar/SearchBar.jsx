import React, { useState } from "react";
import { getCasesByCondition } from "../../Controller/llamados";
import Card from "../CardHome/Card";
import "./SearchBar.css";

function SearchBar() {
  const [consult, setConsult] = useState([]);
  const [patents, setPatents] = useState("");

  function clearConsult(){
    setConsult([]);
  }


  const handleChange = (e) => {
    e.preventDefault();
    setPatents(e.target.value);
  };
  
  console.log('patents1', patents)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    let patents1= patents.toUpperCase().trim()
    const doc = await getCasesByCondition(patents1);
    setConsult(doc);
    setPatents("");
  };
  
  console.log('doc', consult)
  return (
    <>
      <form action="" className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          placeholder="Nro. Patente"
          onChange={(e) => handleChange(e)}
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      {consult.length > 0 && (
        
          <Card consult={consult} clearConsult={clearConsult} />
        
      )}
    </>
  );
}

export default SearchBar;
