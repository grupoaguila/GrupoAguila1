import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import AllCases from "./TablesAlls/AllCases";
import CompletedCases from "./TablesAlls/CompletedCases";
import PendingCases from "./TablesAlls/PendingCases";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrTable } from "react-icons/gr";
import './Perito.css'

function Perito({emailUser}) {
  const [all, setAll]=useState(false)
  const [completed, setCompleted]=useState(false)
  const [pending, setPending]=useState(false)

  const handleClick = (value) => {
    /* console.log('perito handleClick -->', value) */

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
        <AllCases rol={'Tecnico'} emailUser={emailUser} />
      }
      {completed &&
        <CompletedCases rol={'Tecnico'}  emailUser={emailUser}/>
      }
      {pending &&
        <PendingCases rol={'Tecnico'} emailUser={emailUser}/>
      }
  
    </>
  )
}

export default Perito;
