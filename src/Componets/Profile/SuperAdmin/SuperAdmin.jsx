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
import {GrUserAdd,GrFormAdd} from "react-icons/gr";
import './superAdmin.css';

function SuperAdmin() {
  const navigate = useNavigate();
  const [all, setAll]=useState(false)
  const [completed, setCompleted]=useState(false)
  const [pending, setPending]=useState(false)

  const handleClick = (e) => {
    if(e.target.value==='Añadir Casos'){
      return navigate("/addCases")
    }
    if(e.target.value==='Añadir Perito'){
      return navigate("/addPerito")
    }
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
      {/* <div className="superAdminBtn">
          <div className="addPerito" onClick={handleClick}><GrUserAdd/></div>
          <div className="addCasesClass" onClick={handleClick}><GrFormAdd/></div>    
      </div> */}
      <Button variant="primary" onClick={handleClick} value={'Añadir Casos'}>
        Añadir Casos
      </Button>

      <Button onClick={handleClick} value={'Añadir Perito'}>Añadir Perito</Button>

      <Button variant="primary" onClick={handleClick} value={'Todas las pericias'}>
        TODAS LAS PERICIAS
      </Button>

      <Button onClick={handleClick} value={'Pericias Finalizadas'}>PERICIAS FINALIZADAS</Button>

      <Button variant="primary" onClick={handleClick} value={'Pericias Pendientes'}>
        PERICIAS PENDIENTES
      </Button>
      { all &&
        <AllCases />
      }
      { completed &&
        <CompletedCases />
      }
      { pending &&
        <PendingCases />
      }

      {/* <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} /> */}

      {/* <EditModal cases={cases} peritos={peritosByName}/> */}
    </div>
  );
}

export default SuperAdmin;
