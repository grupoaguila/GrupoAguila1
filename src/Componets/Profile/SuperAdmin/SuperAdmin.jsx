import React from 'react'
import { useSelector } from 'react-redux';
import TableCase from '../../Table/TableAdCase/TableCase'
import AddModals from '../../Modals/AddModals'
import AddCases from '../../InputsSelects/AddCases/AddCases'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditModal from '../../Modals/EditModal';


function SuperAdmin() {

  const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  
  return (
    <div>
        <Link to={'/añadirCasos'}>
        <Button>Añadir Casos</Button>
        </Link>
        <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'} />
        <AddModals details={<AddCases/>} titleBotton={'Cerrar sin Guardar'}/>
        <EditModal cases={cases} peritos={peritosByName}/>
    </div>
  )
}

export default SuperAdmin