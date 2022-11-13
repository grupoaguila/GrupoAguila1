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
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    let patents1= patents.toUpperCase().trim()
    console.log('patents1', patents1)
    const doc = await getCasesByCondition(patents1);
    console.log('docbuscado=>',doc);
    if(doc.length === 0){
      console.log('doc.length=>',doc.length);
      setConsult(['No se encontró su caso']);
      return setPatents("")
    }
    
    setConsult(doc)
    setPatents("");
  };
  
  console.log('consult', consult)
  console.log('cargando', patents)
  return (
    <>
      <form action="" className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          // value={patents}
          pattern=".*\S.*"
          placeholder="Nro. Patente"
          onChange={(e) => handleChange(e)}
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      {consult.length > 0 &&  (
        
          <Card consult={consult} clearConsult={clearConsult} />
        
        )
      }
      {/* {
        consult.length > 0 && consult[0]=== 'No se encontró su caso' &&(
          <p> su caso no ha sido cargado </p>
        )
      } */}
    </>
  );
}

export default SearchBar;
