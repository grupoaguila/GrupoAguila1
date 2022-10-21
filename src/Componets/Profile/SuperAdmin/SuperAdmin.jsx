import React from 'react'
import { useSelector } from 'react-redux';
import TableCase from '../../Table/TableAdCase/TableCase'
import AddModals from '../../Modals/AddModals'
import AddCases from '../../InputsSelects/AddCases/AddCases'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import EditModal from '../../Modals/EditModal';


function SuperAdmin() {
  const navigate =useNavigate()
  const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  const handleClick =(e)=>{
    navigate('/addCases')
  }
  const handleClick1 =(e)=>{
    navigate('/addPerito')
  }
  return (
    <div>
       
        <Button onClick={handleClick}>Añadir Casos</Button>
     
        
        <Button onClick={handleClick1}>Añadir Perito</Button>
        
        <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} />
        
        <EditModal cases={cases} peritos={peritosByName}/>
    </div>
  )
}

export default SuperAdmin