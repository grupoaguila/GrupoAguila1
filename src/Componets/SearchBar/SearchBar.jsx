import React, { useState } from "react";
import { getCasesByCondition } from "../../Controller/llamados";
import Card from "../CardHome/Card";
import "./SearchBar.css";

function SearchBar() {
  const [consult, setConsult] = useState([]);
  const [denuncia, setDenuncia] = useState("");

  function clearConsult(){
    setConsult([]);
  }


  const handleChange = (e) => {
    e.preventDefault();
    setDenuncia(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    let denuncia1= denuncia.toUpperCase().trim()
    // console.log('denuncia', denuncia1)
    const doc = await getCasesByCondition(denuncia1);
    // console.log('docbuscado=>',doc);
    if(doc.length === 0){
      // console.log('doc.length=>',doc.length);
      setConsult(['No se encontró su caso']);
      return setDenuncia("")
    }
    
    setConsult(doc)
    setDenuncia("");
  };
  
  // console.log('consult', consult)
  // console.log('cargando', denuncia)  
  return (
    <>
      <form action="" className="search-bar" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          // value={patents}
          pattern=".*\S.*"
          placeholder="Nro. Denuncia"
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
