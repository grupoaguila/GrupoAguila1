import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllCases from "./TablesAlls/AllCases";
import CompletedCases from "./TablesAlls/CompletedCases";
import PendingCases from "./TablesAlls/PendingCases";
import { GrAddCircle, GrProjects, GrTable } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './superAdmin.css'

function SuperAdmin() {
  const navigate = useNavigate();
  const [all, setAll] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [pending, setPending] = useState(false)

  const handleClick = (value) => {
    console.log('super admin handleClick -->', value)

    if (value === 'AddCases') {
      navigate("/addCases")
    }
    if (value === 'AddPerito') {
      navigate("/addPerito")
    }
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
          <Dropdown.Item ><div className="addCase" onClick={() => handleClick('AddCases')}><GrAddCircle /> Agregar Casos</div></Dropdown.Item>
          <Dropdown.Item ><div className="addPerito" onClick={() => handleClick('AddPerito')}><GrAddCircle /> Agregar Perito</div></Dropdown.Item>
          <Dropdown.Item ><div className="allReports" onClick={() => handleClick('allExpertsReport')}><GrTable /> Pericias</div></Dropdown.Item>
          <Dropdown.Item ><div className="endedReports" onClick={() => handleClick('endedReports')}><GrTable /> Finalizadas</div></Dropdown.Item>
          <Dropdown.Item ><div className="pendingReports" onClick={() => handleClick('pendingReports')}><GrTable /> Pendientes</div></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>


      {all &&
        <AllCases />
      }
      {completed &&
        <CompletedCases />
      }
      {pending &&
        <PendingCases />
      }
    </>
  );
}

export default SuperAdmin;
