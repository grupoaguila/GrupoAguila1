import React, { useState } from "react";
import { getCasesByCondition } from "../../assets/Controller/llamados";
import Card from "../CardHome/Card";
import "./SearchBar.css";

function SearchBar() {
  const [consult, setConsult] = useState([]);
  const [patents, setPatents] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setPatents(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = await getCasesByCondition(patents);
    setConsult(doc);
    setPatents("");
  };

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
        <div>
          <Card consult={consult} />
        </div>
      )}
    </>
  );
}

export default SearchBar;
