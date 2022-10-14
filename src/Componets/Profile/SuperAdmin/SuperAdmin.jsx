import React from 'react'
import { useSelector } from 'react-redux';
import TableCase from '../../Table/TableAdCase/TableCase'
import AddModals from '../../Modals/AddModals'
import AddCases from '../../InputsSelects/AddCase/AddCases'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { selectionOptionPeritos } from '../Table/colums2'
// import DataTable2 from '../Table/otherTables/DataTable2'
// import DataTableAll from '../Table/otherTables/DataTableAll'
// import Table3 from '../Table/Table3'

function SuperAdmin() {

  const cases = useSelector(state=>state.cases)
  const peritosByName = useSelector(state=>state.peritosByName)
  
  return (
    <div>
        <Link to={'/añadirCasos'}>
        <Button>Añadir Casos</Button>
        </Link>
        <TableCase cases={cases} peritos={peritosByName} title={'TODAS LAS PERICIAS'}/>
        <AddModals details={<AddCases/>} titleBotton={'Cerrar sin Guardar'}/>

    </div>
  )
}

export default SuperAdmin