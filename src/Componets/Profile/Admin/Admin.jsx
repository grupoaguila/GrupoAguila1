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

function Admin() {
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
        <AllCases rol={'Admin'}/>
      }
      { completed &&
        <CompletedCases rol={'Admin'}/>
      }
      { pending &&
        <PendingCases rol={'Admin'}/>
      }

      {/* <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} /> */}

      {/* <EditModal cases={cases} peritos={peritosByName}/> */}
    </div>
  );
}

export default Admin;
