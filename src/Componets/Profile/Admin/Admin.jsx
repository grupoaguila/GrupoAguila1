import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllCases from "./TablesAlls/AllCases";
import CompletedCases from "./TablesAlls/CompletedCases";
import PendingCases from "./TablesAlls/PendingCases";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrTable } from "react-icons/gr";
import './Admin.css'

function Admin() {
  const navigate = useNavigate();
  const [all, setAll]=useState(false)
  const [completed, setCompleted]=useState(false)
  const [pending, setPending]=useState(false)

  const handleClick = (value) => {
   /*  console.log('admin handleClick -->', value)
 */
    if (value === 'allExpertsReport') {
      setAll(!all)
      setCompleted(false)
      setPending(false)
    }
    if (value === 'endedReports') {
      setAll(false)
      setCompleted(!completed)
      setPending(false)

    }
    if (value === 'pendingReports') {
      setAll(false)
      setCompleted(false)
      setPending(!pending)

    }

  };
  

  return (
    <> 
    <div className="dropDownSuperAdmin">
      <Dropdown as={ButtonGroup}>
        <Button  className="buttonOptionsSuperAdmin">Opciones</Button>
        <Dropdown.Toggle split  className="buttonOptionsSuperAdmin" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item ><div className="allReports" onClick={() => handleClick('allExpertsReport')}><GrTable /> Pericias</div></Dropdown.Item>
          <Dropdown.Item ><div className="endedReports" onClick={() => handleClick('endedReports')}><GrTable /> Finalizadas</div></Dropdown.Item>
          <Dropdown.Item ><div className="pendingReports" onClick={() => handleClick('pendingReports')}><GrTable /> Pendientes</div></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>


      {all &&
        <AllCases rol={'Administrador junior'} />
      }
      {completed &&
        <CompletedCases rol={'Administrador junior'}/>
      }
      {pending &&
        <PendingCases rol={'Administrador junior'}/>
      }
  
    </>
  );
}

export default Admin;
