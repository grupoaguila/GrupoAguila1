import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableCase from "../../Table/TableAdCase/TableCase";
import AddModals from "../../Modals/AddModals";
import AddCases from "../../InputsSelects/AddCases/AddCases";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EditModal from "../../Modals/EditModal";
import AllCases from "./TablesAlls/AllCases";
import CompletedCases from "./TablesAlls/CompletedCases";
import PendingCases from "./TablesAlls/PendingCases";

function Perito() {
    let user //lo tomo de local storage
    const cases = useSelector(state=>state.cases)
  const peritos = useSelector(state=>state.peritos)
  let peritoAsig= peritos.find(el=>el.email===user)?.nombre
  let cases1=cases.filter(el=>el.perito===peritoAsig)

  const navigate = useNavigate();
  const [all, setAll]=useState(false)
  const [completed, setCompleted]=useState(false)
  const [pending, setPending]=useState(false)

  const handleClick = (e) => {
    if(e.target.value==='Todas las pericias'){
       setAll(!all)
       setCompleted(false)
       setPending(false)
    }
    if(e.target.value==='Pericias Finalizadas'){
      setAll(false)
       setCompleted(!completed)
       setPending(false)
      
    }
    if(e.target.value==='Pericias Pendientes'){
      setAll(false)
       setCompleted(false)
       setPending(!pending)
     
    }
    console.log(e.target.value)
    // navigate("/addCases");
  };
  

  return (
    <div>
    
      <Button variant="primary" onClick={handleClick} value={'Todas las pericias'}>
        TODAS LAS PERICIAS
      </Button>

      <Button onClick={handleClick} value={'Pericias Finalizadas'}>PERICIAS FINALIZADAS</Button>

      <Button variant="primary" onClick={handleClick} value={'Pericias Pendientes'}>
        PERICIAS PENDIENTES
      </Button>
      { all &&
        <AllCases rol={'Perito'} cases={cases1}/>
      }
      { completed &&
        <CompletedCases rol={'Perito'} cases={cases1}/>
      }
      { pending &&
        <PendingCases rol={'Perito'} cases={cases1}/>
      }

      {/* <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} /> */}

      {/* <EditModal cases={cases} peritos={peritosByName}/> */}
    </div>
  );
}

export default Perito;
