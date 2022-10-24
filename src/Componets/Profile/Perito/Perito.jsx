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
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrAddCircle, GrProjects, GrTable } from "react-icons/gr";
import './Perito.css'

function Perito({emailUser}) {

    const cases = useSelector(state=>state.cases)
  const peritos = useSelector(state=>state.peritos)
  let peritoAsig= peritos.find(el=>el.email===emailUser)
  console.log('peritoAsig', peritoAsig);
  let cases1=cases.filter(el=>el.perito===peritoAsig.nombre)
  console.log('cases1', cases1);

  const navigate = useNavigate();
  const [all, setAll]=useState(false)
  const [completed, setCompleted]=useState(false)
  const [pending, setPending]=useState(false)

  const handleClick = (value) => {
    console.log('perito handleClick -->', value)

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
        <AllCases rol={'Perito'} cases={cases1} />
      }
      {completed &&
        <CompletedCases rol={'Perito'} cases={cases1}/>
      }
      {pending &&
        <PendingCases rol={'Perito'} cases={cases1}/>
      }
  
    </>
  )
}

export default Perito;
