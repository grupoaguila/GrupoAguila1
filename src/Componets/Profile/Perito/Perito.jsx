import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllCases from "./TablesAlls/AllCases";
import CompletedCases from "./TablesAlls/CompletedCases";
import PendingCases from "./TablesAlls/PendingCases";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { GrTable } from "react-icons/gr";
import './Perito.css'

function Perito({emailUser}) {

    const cases = useSelector(state=>state.cases)
  const peritos = useSelector(state=>state.peritos)
  let peritoAsig= peritos.find(el=>el.email===emailUser)
  //  console.log('peritoAsig', peritoAsig)
  const cases2=cases.filter(e=>!e.hasOwnProperty('bandera') || e.bandera==='false')
  let cases1=cases2.filter(el=>el.perito===peritoAsig.nombre)
  //  console.log('cases1', cases1);
  
  cases1.sort((a,b)=>{
    const dayA=a.Vencimiento.split("-")
    const dayB=b.Vencimiento.split("-")
    const VencimientoA= new Date(`${dayA[1]}/${dayA[0]}/${dayA[2]}`)
    const VencimientoB= new Date(`${dayB[1]}/${dayB[0]}/${dayB[2]}`)
    if(VencimientoA<VencimientoB){
      return -1;
    }
    if(VencimientoA>VencimientoB){
      return 1
    }
    return 0;

  })
  const navigate = useNavigate();
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
        <AllCases rol={'Tecnico'} cases={cases1} />
      }
      {completed &&
        <CompletedCases rol={'Tecnico'} cases={cases1}/>
      }
      {pending &&
        <PendingCases rol={'Tecnico'} cases={cases1}/>
      }
  
    </>
  )
}

export default Perito;
